
import { options } from "@/lib/authOptions";
import NextAuth from "next-auth";

const hanlder = NextAuth(options)


export { hanlder as GET, hanlder as POST }