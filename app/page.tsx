import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/auth.config";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Redirect to Yaas Media Resource Library after successful login
  redirect(
    "https://yaasmedia.notion.site/Resource-Library-1681a941d016804794cdc39a8d270f89"
  );
}
