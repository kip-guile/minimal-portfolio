import React from "react";
import { Box } from "@chakra-ui/core";
import { logoBox, navLinks, nameBox } from "./header";

const HeaderComponent = () => {
  return (
    <Box
      display={{ md: "flex" }}
      flexDirection={{ md: "column" }}
      alignItems={{ md: "center" }}
      flexBasis={{ md: "25%" }}
      height={{ md: "100vh" }}
    >
      {logoBox}
      {nameBox}
      {navLinks}
    </Box>
  );
};

export default HeaderComponent;
