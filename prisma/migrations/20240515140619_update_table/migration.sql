-- CreateTable
CREATE TABLE "transaction" (
    "trans_id" SERIAL NOT NULL,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("trans_id")
);

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
