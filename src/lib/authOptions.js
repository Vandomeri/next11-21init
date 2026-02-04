import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

export const options = {

    session: {
        strategy: 'jwt'
    },
    providers: [

        Credentials({
            credentials: {
                email: '',
                password: '',
            },
            async authorize(credentials) {

                const user = await prisma.author.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    return null
                }


                const correctPassword = await compare(credentials.password, user.password)

                if (correctPassword) {
                    return {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                } else {
                    return null
                }


            }
        })

    ],
    callbacks: {
        async jwt({ user, token }) {

            if (user) {
                token.id = user.id
                token.email = user.email
                token.role = user.role
            }

            return token
        },
        async session({ session, token }) {

            session.user = {
                id: token.id,
                email: token.email,
                role: token.role
            }

            return session
        }
    }

}