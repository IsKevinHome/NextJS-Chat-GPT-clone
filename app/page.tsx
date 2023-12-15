"use client";

import React from "react";
import next from "next";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

export default function Index() {
  const { user, isLoading } = useUser();

  if (user) redirect("/chat");

  return (
    <>
      {!user && <h1>Hello, please log in</h1>}
      {user && <h1>Hello {user.email}</h1>}
    </>
  );
}
