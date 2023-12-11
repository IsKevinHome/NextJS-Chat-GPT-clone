"use  client";

import * as React from "react";

import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ButtonAppBar() {
  const { user, isLoading } = useUser();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{backgroundColor: '#424242'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yakety
          </Typography>
          {/* LOGIN */}
          {!user && (
            <Button color="inherit" href="/api/auth/login">
              Login
              {/* DO NOT USE NEXTJS LINKS FOR AUTH0 API */}
              {/* <a href="/api/auth/login">Login</a> */}
            </Button>
          )}
          {/* LOGOUT */}
          {user && (
            <>
              <Avatar alt="Remy Sharp" src={user.picture} sx={{mr: 3}}/>
              <Button color="inherit" href="/api/auth/logout">
                Logout
                {/* DO NOT USE NEXTJS LINKS FOR AUTH0 API */}
                {/* <a href="/api/auth/logout">Logout</a> */}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
