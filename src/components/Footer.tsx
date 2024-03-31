import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <AppBar component="footer" position="static" sx={{ backgroundColor: "#ffc107" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" sx={{ color: "black" }}>
            ©2024 profile
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
