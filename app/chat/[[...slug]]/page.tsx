import Head from "next/head";

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ChatUi from "components/ChatUi";


export default function Chat() {
  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>
      <ChatUi />
    </>
  );
}
