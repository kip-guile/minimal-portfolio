import React from "react"
import { Box, Text, Flex, PseudoBox, Image, Link } from "@chakra-ui/core"
import { contact } from "./data"
import { motion } from "framer-motion"
import ReactTypingEffect from "react-typing-effect"
import useIcon from "./customHooks"

import avatar from "../image/avatar.png"

const MotionFlex = motion.custom(Flex)
const MotionPseudoBox = motion.custom(PseudoBox)
const MotionBox = motion.custom(Box)

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
        color={darkMode ? "#ffa7c4" : "#00BF86"}
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
    flexDirection={{ md: "column" }}
    justifyContent="center"
    alignItems="center"
    borderBottom={{
      md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
    }}
    w="95%"
    p={{ md: 0, xs: 5 }}
    minHeight={{ md: "55rem" }}
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      flexBasis={{ md: "30%" }}
      w={{ md: "50%" }}
      p={1}
    >
      <PseudoBox
        w={{ xs: "80%", md: "100%" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          fallbackSrc={{
            md: "https://via.placeholder.com/400",
            xs: "https://via.placeholder.com/250",
          }}
          size={{ md: "400px", xs: "200px" }}
          src={avatar}
          alt="avatar"
        />
      </PseudoBox>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      flexBasis={{ md: "55%" }}
      w={{ md: "60%" }}
      p={1}
    >
      <Text
        fontSize={{ md: "18px", xs: "16px" }}
        textAlign="justify"
        fontFamily="Crimson Text, serif"
        marginBottom={{ xs: 5 }}
      >
        I'm Alex. I recently completed{" "}
        <Link
          color={darkMode ? "#ffa7c4" : "#00BF86"}
          href="https://lambdaschool.com/"
        >
          Lambda School's
        </Link>{" "}
        Web Development program and have been coding & learning consistently and
        for the past year.
      </Text>
      <Text
        fontSize={{ md: "18px", xs: "16px" }}
        textAlign="justify"
        fontFamily="Crimson Text, serif"
        marginBottom={{ xs: 5 }}
      >
        Most of my work day to day is in React/Redux/Node architecture with
        specialization in state management paradigms.
      </Text>
      <Text
        fontSize={{ md: "18px", xs: "16px" }}
        textAlign="justify"
        fontFamily="Crimson Text, serif"
        marginBottom={{ xs: 5 }}
      >
        I am also a{" "}
        <Link
          color={darkMode ? "#ffa7c4" : "#00BF86"}
          href="https://www.pmi.org/certifications/types/business-analysis-pba"
        >
          PMI certified
        </Link>{" "}
        Business Analyst and the skills I acquired have come in handy with
        managing requirements on all projects.
      </Text>
      <Text
        fontSize={{ md: "18px", xs: "16px" }}
        textAlign="justify"
        fontFamily="Crimson Text, serif"
        marginBottom={{ xs: 5 }}
      >
        I love to read fiction, and I write{" "}
        <Link
          color={darkMode ? "#ffa7c4" : "#00BF86"}
          href="https://www.goodreads.com/user/show/26479310-pokerface"
        >
          reviews
        </Link>{" "}
        about some of the books I read.
      </Text>
      <Text
        fontSize={{ md: "18px", xs: "16px" }}
        textAlign="justify"
        fontFamily="Crimson Text, serif"
        marginBottom={{ xs: 5 }}
      >
        If you're still reading up to this point, odds are you're interesting
        and / or you're interested in what I can do. Happy to have a
        conversation. Please{" "}
        <Link
          color={darkMode ? "#ffa7c4" : "#00BF86"}
          href="mailto:oguejioforalexander@gmail.com"
        >
          reach out
        </Link>
        .
      </Text>
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
      mb={{ md: 0, xs: 6 }}
      mt={1}
      fontFamily="Lato, sans-serif"
      color={darkMode ? "#ffa7c4" : "#00BF86"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="95%"
    >
      Get in touch
    </Text>

    <MotionFlex
      mt={{ md: 4 }}
      mb={{ md: 1, xs: 4 }}
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
          key={i}
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
            backgroundColor: darkMode ? "#ffa7c4" : "#00BF86",
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
