import NextAuth from "next-auth";
import { authOptions } from "./auth.config";

export const config = {
  runtime: "edge",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
