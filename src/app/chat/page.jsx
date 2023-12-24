"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

export default function Home() {
  const { user, isLoading } = useUser();

  return <>
  <LeftSection />
  <RightSection />
  </>;
}
