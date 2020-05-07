import React from "react";
import { Box } from "@chakra-ui/core";
import { Route } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

const Main = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Box
            w="100vw"
            h={{ md: "100vh" }}
            display={{ md: "flex" }}
            bg="#282c35"
            color="hsla(0,0%,100%,0.88)"
          >
            <HeaderComponent />
            <Component {...props} />
          </Box>
        );
      }}
    />
  );
};

export default Main;
