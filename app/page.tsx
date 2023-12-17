"use client";

import React from "react";
import { useUser, UserProvider } from "@auth0/nextjs-auth0/client";

import { redirect } from "next/navigation";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Index() {
  const { user, isLoading } = useUser();

  // if (user) redirect("/chat");

  return (
    <>
      <UserProvider>
        <CssBaseline />

        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {!user && (
            <Stack spacing={2} direction="row">
              <Button variant="contained" href="/api/auth/login?returnTo=/chat">
                Log In
              </Button>
              <Button variant="outlined" href="/api/auth/signup">
                Sign Up
              </Button>
            </Stack>
          )}
          {user && (
            <Button variant="outlined" href="/api/auth/logout">
              Log Out
            </Button>
          )}
        </Container>

        {/* {user && <h1>Hello welcome</h1>} */}
      </UserProvider>
    </>
  );
}
