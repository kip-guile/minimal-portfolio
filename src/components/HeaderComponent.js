import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@chakra-ui/core";
import { logoBox, navLinks, nameBox } from "./header";
import { GiLightBulb, GiCandleLight } from "react-icons/gi";
import { toggleDark } from "../actions";

const HeaderComponent = ({ toggleDark, darkMode }) => {
  return (
    <Box
      display={{ md: "flex" }}
      textAlign={{ xs: "center" }}
      flexDirection={{ md: "column" }}
      alignItems={{ md: "center" }}
      flexBasis={{ md: "25%" }}
      height={{ md: "100vh" }}
    >
      {logoBox(darkMode)}
      {nameBox(darkMode)}
      {navLinks(darkMode)}
      <Box pb={5}>
        <Button
          onClick={toggleDark}
          leftIcon={darkMode ? GiLightBulb : GiCandleLight}
          variantColor="red"
          variant="link"
        >
          {darkMode ? "Light" : "Dark"}
        </Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.dark,
});

export default connect(mapStateToProps, { toggleDark })(HeaderComponent);
