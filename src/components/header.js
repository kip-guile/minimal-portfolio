import React from "react";
import { Box, Text, Flex, Image, PseudoBox } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import logo from "../image/pink_logo.png";
import redlogo from "../image/redlogo.png";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";

export const logoBox = (darkMode) => (
  <Box
    w={{ md: "75%", xs: "100%" }}
    h={{ md: "13em", xs: "10em" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderBottom={{
      md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
      xs: darkMode ? "0.15em solid #ffecb2" : "0.15em solid #282c35",
    }}
  >
    <Image
      w={{ md: "70%", xs: "50%" }}
      rounded="lg"
      src={darkMode ? logo : redlogo}
      alt="alexander"
      display="flex"
    />
  </Box>
);
export const nameBox = (darkMode) => (
  <Box
    w={{ md: "75%", xs: "100%" }}
    h={{ md: "14em", xs: "10em" }}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    borderBottom={{
      md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
    }}
  >
    <Text
      color={darkMode ? "#ffa7c4" : "dodgerblue"}
      fontSize="lg"
      fontWeight="bold"
      mb={5}
      fontFamily="Cousine, monospace"
    >
      Alexander Oguejiofor
    </Text>
    <Text
      textAlign={{ md: "center", xs: "justify" }}
      fontSize={{ md: "1em", xs: "18px" }}
      fontFamily="Cousine"
    >
      Web Developer & Business Analyst
    </Text>
    <Flex mt={5}>
      <IconContext.Provider value={{ className: "react-icon" }}>
        <MdLocationOn style={{ fontSize: "1.2em", marginRight: "10px" }} />
      </IconContext.Provider>
      <Text fontSize={{ md: "1em", xs: "18px" }} fontFamily="Cousine">
        Lagos, NG
      </Text>
    </Flex>
  </Box>
);
export const navLinks = (darkMode) => (
  <Flex
    mt={2}
    mb={{ xs: 10 }}
    fontFamily="Cousine, monospace"
    justifyContent={{ xs: "center" }}
  >
    <NavLink to="/projects">
      <PseudoBox
        as="a"
        borderBottom={darkMode ? "solid #ffecb2 1px" : "solid #282c35 1px"}
        fontSize={{ xs: "18px" }}
        _active={{
          color: darkMode ? "#ffa7c4" : "dodgerblue",
          borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid dodgerblue 1px",
        }}
        _hover={{
          color: darkMode ? "#ffa7c4" : "dodgerblue",
          borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid dodgerblue 1px",
        }}
      >
        PROJECTS
      </PseudoBox>
    </NavLink>
    <Text ml={4} mr={4} fontSize="sm">
      /
    </Text>
    <NavLink to="/">
      <PseudoBox
        fontSize={{ xs: "18px" }}
        as="a"
        borderBottom={darkMode ? "solid #ffecb2 1px" : "solid #282c35 1px"}
        _active={{
          color: darkMode ? "#ffa7c4" : "dodgerblue",
          borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid dodgerblue 1px",
        }}
        _hover={{
          color: darkMode ? "#ffa7c4" : "dodgerblue",
          borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid dodgerblue 1px",
        }}
      >
        ABOUT
      </PseudoBox>{" "}
    </NavLink>
  </Flex>
);
