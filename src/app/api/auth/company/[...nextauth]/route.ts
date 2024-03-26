import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }
        const com = await prisma.company.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!com) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          com.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: com.company_id + '',
          email: com.email,
          name: com.name,
          randomKey: 'Chaos_Ancient_Gear_Giant'
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        company: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const c = user as unknown as any
        return {
          ...token,
          id: c.id,
          randomKey: c.randomKey
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }