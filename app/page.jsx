"use client";
import SignInBtn from "@/components/SignInBtn";
import { useSession } from "next-auth/react";
import { TopicsComponent } from "@/components/topics";

export default function Home() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <TopicsComponent />
      </>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <SignInBtn />
      </div>
    );
  }
}
