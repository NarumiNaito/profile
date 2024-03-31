import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Layout: React.FC = () => {
  return (
    <>
      <Box>
        <Header />
        <Main />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
