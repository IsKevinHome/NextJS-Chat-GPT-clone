"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Index() {
  const { user, isLoading } = useUser();

  return (
    <>
      {!user && <h1>Hello, please log in</h1>}
      {user && <h1>Hello {user.email}</h1>}
    </>
  );
}
