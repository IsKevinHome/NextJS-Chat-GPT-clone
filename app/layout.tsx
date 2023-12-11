'use client';

import React from "react";
import Navbar from "../components/Navbar";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
