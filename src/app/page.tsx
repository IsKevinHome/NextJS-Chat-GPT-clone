"use client";

import React from "react";
import { useUser, UserProvider } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

export default function Home() {
  const { user, isLoading } = useUser();

  if (user) redirect("/chat"); // in case user is already logged in, redirect to /chat

  return (
    <>
      <UserProvider>
        <div className="flex items-center justify-center h-screen">
          {!user && (
            <div>
              <a
                href="/api/auth/login?returnTo=/chat" // redirects to /chat
                className="btn" 
              >
                Login
              </a>
              <a
                href="/api/auth/signup"
                className="btn"
              >
                Sign Up
              </a>
            </div>
          )}
          {user && (
            <a
              href="/api/auth/logout"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
            >
              Logout
            </a>
          )}
        </div>
      </UserProvider>
    </>
  );
}
