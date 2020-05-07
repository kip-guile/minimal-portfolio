import React from "react";
import { Box } from "@chakra-ui/core";
import { helloBox, middleBox, contactBox } from "../components/about";

const AboutComponent = () => {
  return (
    <Box
      flexBasis={{ md: "75%" }}
      display={{ md: "flex" }}
      flexDirection={{ md: "column" }}
      alignItems={{ md: "flex-start" }}
      overflow={{ md: "auto" }}
      height={{ md: "100%" }}
    >
      {helloBox()}
      {middleBox}
      {contactBox}
    </Box>
  );
};

export default AboutComponent;
