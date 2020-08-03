import React from "react"
import { Box, Text, Flex, PseudoBox } from "@chakra-ui/core"
import { contact } from "./data"
import { motion } from "framer-motion"
import ReactTypingEffect from "react-typing-effect"
import { DiGit } from "react-icons/di"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FaGoodreads } from "react-icons/fa"
import { bio } from "./data"

const MotionFlex = motion.custom(Flex)
const MotionPseudoBox = motion.custom(PseudoBox)

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
    <Box
      textAlign={{ xs: "center", md: "left" }}
      width="95%"
      minHeight={{ md: "13rem" }}
      display={{ md: "flex", xs: "none" }}
      justifyContent="center"
      alignItems="center"
      borderBottom={{
        md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
      }}
    >
      <Text
        fontSize={{ md: "3xl", xs: "2xl" }}
        fontFamily="Lato, sans-serif"
        fontWeight="bold"
        color={darkMode ? "#ffa7c4" : "dodgerblue"}
      >
        <ReactTypingEffect text="Alexander Oguejiofor" />
      </Text>
    </Box>
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
    p={5}
    flexDirection="column"
    justifyContent="center"
    alignItems={{ md: "flex-start", xs: "center" }}
    w="95%"
    h={{ md: "2500px" }}
    minHeight={{ md: "13rem" }}
  >
    <Text
      fontSize="lg"
      fontWeight="bold"
      mb={6}
      mt={1}
      fontFamily="Lato, sans-serif"
      color={darkMode ? "#ffa7c4" : "dodgerblue"}
    >
      Get in touch
    </Text>
    <Box
      display={{ md: "flex" }}
      w="100%"
      justifyContent={{ md: "space-between" }}
      textAlign={{ md: "justify", xs: "center" }}
    >
      <MotionFlex
        mt={{ md: 4, xs: 8 }}
        mb={{ xs: 4 }}
        animate={{ y: [50, -50, 0] }}
        transition={{
          ease: "easeOut",
          duration: 1.5,
          times: [0, 0.2, 1],
        }}
        width={{ md: "100%" }}
        justifyContent={{ md: "center", xs: "center" }}
        alignItems="center"
        color={darkMode ? "#282c35" : "hsla(0,0%,100%,0.88)"}
      >
        {contact.map((contact) => (
          <MotionPseudoBox
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
            ml={5}
            p={3}
            borderRadius="50%"
            bg={darkMode ? "#ffecb2" : "#282c35"}
          >
            <AiFillLinkedin fontSize="2rem" />
          </MotionPseudoBox>
        ))}
      </MotionFlex>
    </Box>
  </Box>
)
