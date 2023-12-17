import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", display: "flex" }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid
          item
          xs={2}
          sx={{ bgcolor: "primary.dark", color: "white", p: 2 }}
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
            bgcolor: "background.default",
            p: 2,
          }}
        >
          {/* Main content goes here */}

          {/* Spacer to push the text field to the bottom */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Text field at the bottom */}
          <TextField
            label="Input Label"
            variant="outlined"
            fullWidth
            sx={{ mt: "auto" }} // This pushes the text field to the bottom
          />
        </Grid>
      </Grid>
    </Box>
  );
}
