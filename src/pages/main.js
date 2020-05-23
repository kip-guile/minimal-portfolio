import React from "react";
import { connect } from "react-redux";
import { Box } from "@chakra-ui/core";
import { Route } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

const Main = ({ component: Component, darkMode, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Box
            w={{ md: "100vw", xs: "95vw" }}
            h={{ md: "100vh" }}
            display={{ md: "flex", xs: "flex" }}
            flexDirection={{ md: "row", xs: "column" }}
            bg={darkMode ? "#282c35" : "hsla(0,0%,100%,0.88)"}
            color={darkMode ? "hsla(0,0%,100%,0.88)" : "#282c35"}
          >
            <HeaderComponent />
            <Component {...props} />
          </Box>
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.dark,
});

export default connect(mapStateToProps)(Main);
