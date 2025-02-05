"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-8 text-center">Welcome</h1>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl:
                process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
              redirect: true,
            })
          }
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Image src="/google.svg" alt="Google logo" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
