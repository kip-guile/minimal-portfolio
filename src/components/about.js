import React from "react"
import { Box, Text, Flex, PseudoBox } from "@chakra-ui/core"
import { contact } from "./data"
import { motion } from "framer-motion"
import ReactTypingEffect from "react-typing-effect"
import { bio } from "./data"
import useIcon from "./customHooks"

const MotionFlex = motion.custom(Flex)
const MotionPseudoBox = motion.custom(PseudoBox)
const MotionBox = motion.custom(Box)

const paragraphs = (text, i) => (
  <Text
    key={i}
    fontSize={{ md: "18px", xs: "16px" }}
    textAlign="justify"
    fontFamily="Crimson Text, serif"
    marginBottom={{ xs: 5 }}
  >
    {text}
  </Text>
)

export const helloBox = (darkMode) => {
  return (
    <MotionBox
      textAlign={{ xs: "center", md: "left" }}
      width="95%"
      minHeight={{ md: "13rem" }}
      display={{ md: "flex", xs: "none" }}
      justifyContent="center"
      alignItems="center"
      borderBottom={{
        md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
      }}
      animate={{ x: [-30, 30, 0] }}
      transition={{
        ease: "easeOut",
        duration: 1.5,
        times: [0, 0.2, 1],
      }}
    >
      <Text
        fontSize={{ md: "3xl", xs: "2xl" }}
        fontFamily="Lato, sans-serif"
        fontWeight="bold"
        color={darkMode ? "#ffa7c4" : "dodgerblue"}
      >
        Hello, I am
        <ReactTypingEffect text=" Alexander Oguejiofor" />
      </Text>
    </MotionBox>
  )
}

export const middleBox = (darkMode) => (
  <Box
    textAlign={{ xs: "center", md: "left" }}
    display={{ md: "flex" }}
    justifyContent="center"
    alignItems="center"
    borderBottom={{
      md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
    }}
    w="95%"
    p={{ md: 0, xs: 5 }}
    minHeight={{ md: "35rem" }}
  >
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      flexBasis={{ md: "60%" }}
      h={{ md: "90%" }}
      p={1}
    >
      {bio().map((bio, i) => {
        return paragraphs(bio, i)
      })}
    </Box>
  </Box>
)

export const contactBox = (darkMode) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems={{ md: "center", xs: "center" }}
    w="95%"
    h={{ md: "2500px" }}
    minHeight={{ md: "13rem" }}
  >
    <Text
      fontSize="lg"
      fontWeight="bold"
      textAlign="center"
      mb={6}
      mt={1}
      fontFamily="Lato, sans-serif"
      color={darkMode ? "#ffa7c4" : "dodgerblue"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="95%"
    >
      Get in touch
    </Text>

    <MotionFlex
      mt={{ md: 4 }}
      mb={{ xs: 4 }}
      animate={{ x: [100, -50, 0] }}
      transition={{
        ease: "easeOut",
        duration: 1.5,
        times: [0, 0.2, 1],
      }}
      width={{ md: "100%", xs: "65%" }}
      h={{ md: "3.5", xs: "7rem" }}
      flexWrap="wrap"
      justifyContent={{ md: "center", xs: "space-evenly" }}
      alignItems={{ md: "center" }}
      color={darkMode ? "#282c35" : "hsla(0,0%,100%,0.88)"}
    >
      {contact.map((contact, i) => (
        <MotionPseudoBox
          h={{ md: "3.5rem", xs: "2.5rem" }}
          w={{ md: "3.5rem", xs: "2.5rem" }}
          target="_blank"
          href={contact.url}
          as="a"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.8 },
          }}
          _hover={{
            backgroundColor: darkMode ? "#ffa7c4" : "dodgerblue",
            cursor: "pointer",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml={{ md: i === 0 ? 0 : 4, xs: 2 }}
          p={3}
          borderRadius="50%"
          bg={darkMode ? "#ffecb2" : "#282c35"}
        >
          {useIcon(contact.name)}
        </MotionPseudoBox>
      ))}
    </MotionFlex>
  </Box>
)
