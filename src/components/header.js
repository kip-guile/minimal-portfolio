import React from "react";
import { Box, Text, Flex, Image, PseudoBox } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import logo from "../image/pink_logo.png";

export const logoBox = (
  <Box
    w={{ md: "75%", xs: "100%" }}
    h={{ md: "13em", xs: "10em" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderBottom={{
      md: "0.8em solid #ffecb2",
      xs: "0.15em solid #ffecb2",
    }}
  >
    <Image
      w={{ md: "70%", xs: "50%" }}
      rounded="lg"
      src={logo}
      alt="alexander"
      display="flex"
    />
  </Box>
);
export const nameBox = (
  <Box
    w={{ md: "75%", xs: "100%" }}
    h={{ md: "14em", xs: "10em" }}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    borderBottom={{ md: "0.8em solid #ffecb2" }}
  >
    <Text
      color="#ffa7c4"
      fontSize="lg"
      fontWeight="bold"
      mb={5}
      fontFamily="Cousine, monospace"
    >
      Alexander Oguejiofor
    </Text>
    <Text fontSize="sm" fontFamily="Cousine">
      Web Developer & Business Analyst
    </Text>
  </Box>
);
export const navLinks = (
  <Flex
    mt={2}
    mb={{ xs: 10 }}
    fontFamily="Cousine, monospace"
    justifyContent={{ xs: "center" }}
  >
    <NavLink to="/projects">
      <PseudoBox
        as="a"
        borderBottom="solid #ffecb2 1px"
        _active={{ color: "#ffa7c4", borderBottom: "solid #ffa7c4 1px" }}
        _hover={{ color: "#ffa7c4", borderBottom: "solid #ffa7c4 1px" }}
      >
        PROJECTS
      </PseudoBox>
    </NavLink>
    <Text ml={2} mr={2} fontSize="sm">
      /
    </Text>
    <NavLink to="/">
      <PseudoBox
        as="a"
        borderBottom="solid #ffecb2 1px"
        _active={{ color: "#ffa7c4", borderBottom: "solid #ffa7c4 1px" }}
        _hover={{ color: "#ffa7c4", borderBottom: "solid #ffa7c4 1px" }}
      >
        ABOUT
      </PseudoBox>{" "}
    </NavLink>
  </Flex>
);
