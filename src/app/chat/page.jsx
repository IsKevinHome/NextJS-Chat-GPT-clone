"use client";

import React from "react";
import { useUser, UserProvider } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, isLoading } = useUser();

  return <>chat page</>;
}
