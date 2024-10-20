"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div className="p-4 flex justify-between items-center shadow-md mt-7">
      <Link className="font-bold text-lg text-orange-700 hover:text-orange-500" href={"/"}>
        Todo List App
      </Link>
      
      {status === "authenticated" ? (
        <div className="flex justify-between">
          <Link className="bg-orange-700 text-white px-6 py-2 rounded-md mr-4 hover:bg-orange-500" href={"/addTopic"}>
        Add List
         </Link>
        <button
          onClick={() => signOut()}
          className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-500 "
        >
          Sign Out
        </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-500"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
