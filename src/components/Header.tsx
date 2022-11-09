import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          minHeight: 24,
        }}
      >
        <Typography variant="h6">Minecraft Web</Typography>
      </Toolbar>
    </AppBar>
  );
};
