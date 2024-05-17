'use server'
import { PrismaClient } from '@prisma/client';
import { minus, plus } from '../../order/calcutor'
import { v4 as uuid } from "uuid";
import { sentInvoice } from './email'
import { sentSalary } from './salary'
export async function PUT(req: Request) {
  const prisma = new PrismaClient();
  try {
    const formData = await req.formData();
    const job_id = parseInt(formData.get('job_id') as string);
    const email = formData.get("email") as string
    const job = await prisma.job.findUnique({
      where : {
        job_id : job_id
      }
    })
    const work = await prisma.work.findFirst({
      where: { 
        job_id: job_id 
      },
    });
    const company = await prisma.user.findUnique({
      where : {
        email : email
      },
      include : {
        wallet : {
          select : {
            amount : true
          }
        }
      }
    })
    const user = await prisma.user.findUnique({
      where : {
        user_id : work?.user_id
      },
      include : {
        wallet : {
          select : {
            amount : true
          }
        }
      }
    })
    if (work && user && job && company) {
      if(user.wallet[0].amount >= job.budget){
          await prisma.history.update({
            where: {
              user_id_job_id: {
                user_id: work.user_id,
                job_id: work.job_id,
              },
            },
            data: { 
                status: 'Completed' 
            },
          });
          const transId = uuid()
          const newtrans = await prisma.transaction.create({
            data : {
              trans_id : transId,
              user_id1 : company.user_id,
              user_id2 : user.user_id,
              job_id : job.job_id,
              amount : job.budget,
              product_name : job.title,
            }
          })
          const minusOne = await minus(newtrans.amount,newtrans.user_id1)
          await prisma.wallet.updateMany({
              where : {
                user_id : newtrans.user_id1
              },
              data : {
                amount : minusOne
              }
          })
          const plusX = await plus(newtrans.amount,newtrans.user_id2)
          await prisma.wallet.updateMany({
            where : {
               user_id : newtrans.user_id2
            },
            data : {
               amount : plusX
            }
          })
          await sentSalary(newtrans.user_id2,newtrans.amount)
          await sentInvoice(newtrans.user_id1,newtrans.amount,newtrans.trans_id,newtrans.product_name)
          await prisma.$disconnect();
          return Response.json("Success")
      }
      else {
        await prisma.$disconnect();
        return Response.json("Don't have enough money")
      }
    }
  } catch (error) {
    await prisma.$disconnect();
    return Response.json({ error }, { status: 500 });
  }
}