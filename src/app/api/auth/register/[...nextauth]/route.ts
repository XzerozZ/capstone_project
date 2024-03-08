import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

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
                    placeholder: 'john@email.com'
                },
                password: { label: 'Password', type: 'password' }
            },
            authorize: function (credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
                throw new Error("Function not implemented.");
            }
        })
    ]
}