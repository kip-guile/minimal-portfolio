import React from "react"
import { motion } from "framer-motion"
import { Box, Text, Flex, Image, PseudoBox } from "@chakra-ui/core"
import { NavLink } from "react-router-dom"
import logo from "../image/pink_logo.png"
import dark_logo from "../image/dark_logo.png"
import { MdLocationOn } from "react-icons/md"
import { IconContext } from "react-icons"

const MotionBox = motion.custom(Box)

export const logoBox = (darkMode) => (
  <MotionBox
    w={{ md: "75%", xs: "100%" }}
    h={{ md: "13em", xs: "10em" }}
    display={{ md: "flex", xs: "none" }}
    justifyContent="center"
    alignItems="center"
    borderBottom={{
      md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
      xs: darkMode ? "0.15em solid #ffecb2" : "0.15em solid #282c35",
    }}
    animate={{ x: [50, -30, 0] }}
    transition={{
      ease: "easeOut",
      duration: 1.5,
      times: [0, 0.2, 1],
    }}
  >
    <Image
      w={{ md: "70%", xs: "50%" }}
      rounded="lg"
      src={darkMode ? logo : dark_logo}
      alt="alexander"
      display="flex"
    />
  </MotionBox>
)
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
      color={darkMode ? "#ffa7c4" : "#00BF86"}
      fontSize={{ md: "lg", xs: "25px" }}
      fontWeight="bold"
      mb={5}
      fontFamily="Lato, sans-serif"
    >
      Alexander Oguejiofor
    </Text>
    <Text
      textAlign={{ md: "center", xs: "justify" }}
      fontSize={{ md: "1em", xs: "18px" }}
      fontFamily="Crimson Text, serif"
    >
      Web Developer & Business Analyst
    </Text>
    <Flex mt={5}>
      <IconContext.Provider value={{ className: "react-icon" }}>
        <MdLocationOn style={{ fontSize: "1.2em", marginRight: "10px" }} />
      </IconContext.Provider>
      <Text
        fontSize={{ md: "1em", xs: "18px" }}
        fontFamily="Crimson Text, serif"
      >
        Lagos, NG
      </Text>
    </Flex>
  </Box>
)
export const navLinks = (darkMode, page) => (
  <Flex
    mt={2}
    mb={{ xs: 10 }}
    fontFamily="Crimson Text, serif"
    justifyContent={{ xs: "center" }}
  >
    {page === "about" ? (
      <NavLink to="/projects">
        <PseudoBox
          borderBottom={darkMode ? "solid #ffecb2 1px" : "solid #282c35 1px"}
          fontSize={{ xs: "18px" }}
          _active={{
            color: darkMode ? "#ffa7c4" : "#00BF86",
            borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid #00BF86 1px",
          }}
          _hover={{
            color: darkMode ? "#ffa7c4" : "#00BF86",
            borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid #00BF86 1px",
          }}
        >
          MY PROJECTS
        </PseudoBox>
      </NavLink>
    ) : (
      <NavLink to="/">
        <PseudoBox
          fontSize={{ xs: "18px" }}
          borderBottom={darkMode ? "solid #ffecb2 1px" : "solid #282c35 1px"}
          _active={{
            color: darkMode ? "#ffa7c4" : "#00BF86",
            borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid #00BF86 1px",
          }}
          _hover={{
            color: darkMode ? "#ffa7c4" : "#00BF86",
            borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid #00BF86 1px",
          }}
        >
          ABOUT ME
        </PseudoBox>{" "}
      </NavLink>
    )}
  </Flex>
)
