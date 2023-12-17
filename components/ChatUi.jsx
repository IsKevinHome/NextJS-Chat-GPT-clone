"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#121212",
//       light: "#fafafa",
//     },
//     secondary: {
//       main: grey[900],
//     },
//   },
// });

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1, minHeight: "100vh", display: "flex" }}>
        <CssBaseline />
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid
            item
            xs={2}
            color="palette.text.primary"
            sx={{ bgcolor: grey[900] }}
          >
            {/* Left column content goes here */}
            Hello from the left chat column
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
            }}
          >
            {/* Main content goes here */}

            {/* Spacer to push the text field to the bottom */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Text field at the bottom */}
            <TextField
              id="chat"
              label="Chat"
              variant="outlined"
              // defaultValue="Hello World"
              multiline
              maxRows={6}
              sx={{
                mt: "auto",
                width: "60%",
                margin: "auto",
                mb: 4,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
