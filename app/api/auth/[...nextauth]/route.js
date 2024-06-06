import { authOptions } from "@/components/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);
export { handler as Get, handler as Post };
