import React from "react"
import { Box, Text, Flex, PseudoBox } from "@chakra-ui/core"
import { contact } from "./data"
import ReactTypingEffect from "react-typing-effect"
// import {
//   DiJavascript1,
//   DiReact,
//   DiCss3,
//   DiGit,
//   DiPostgresql,
//   DiMongodb,
//   DiTravis,
//   DiMysql,
//   DiLinux,
// } from "react-icons/di";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
// import {
//   FaGoodreads,
//   FaNodeJs,
//   FaVuejs,
//   FaLess,
//   FaPython,
//   FaTrello,
//   FaAws,
// } from "react-icons/fa";
// import { BsGraphUp } from "react-icons/bs";
// import { GiJesterHat } from "react-icons/gi";
import { bio } from "./data"

// const skills = [
//   { tag: DiJavascript1, name: "JavaScript" },
//   { tag: DiReact, name: "React" },
//   { tag: FaNodeJs, name: "NodeJS" },
//   { tag: FaVuejs, name: "Vue" },
//   { tag: AiFillHtml5, name: "HTML5" },
//   { tag: FaPython, name: "Python" },
//   { tag: DiMysql, name: "MySQL" },
//   { tag: DiCss3, name: "CSS3" },
//   { tag: DiReact, name: "Redux" },
//   { tag: DiPostgresql, name: "PostGresDB" },
//   { tag: DiMongodb, name: "MongoDB" },
//   { tag: FaLess, name: "Less" },
// ];

// const baSkills = [
//   { tag: DiGit, name: "Git" },
//   { tag: FaAws, name: "AWS" },
//   { tag: FaTrello, name: "Trello" },
//   { tag: GiJesterHat, name: "Jest" },
//   { tag: DiTravis, name: "TravisCI" },
//   { tag: DiLinux, name: "Linux" },
//   // { tag: BsGraphUp, name: "Requirement Management" },
//   { tag: BsGraphUp, name: "Elicitation" },
//   { tag: BsGraphUp, name: "Quality Assurance" },
// ];

// const tag = (name, Logo, color, key) => (
//   <Box mb={5} key={key}>
//     <Tag mr={2} mb={2} variantColor={color} size="md">
//       <Logo
//         style={{
//           backgroundColor: "hsla(0,0%,100%,0.88)",
//           color: "#282c35",
//           marginRight: "5px",
//         }}
//       />
//       <TagLabel>{<p style={{ fontSize: "0.8em" }}>{name}</p>}</TagLabel>
//     </Tag>
//   </Box>
// );

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
    {/* <Box
      display="flex"
      flexDirection="column"
      justifyContent={{ md: "space-around", xs: "center" }}
      flexBasis={{ md: "15%" }}
      h={{ md: "90%" }}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        // mt={5}
        mb={5}
        fontFamily="Cousine, monospace"
        color={darkMode ? "#ffa7c4" : "dodgerblue"}
        textAlign="center"
      >
        Tools
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {skills.map((skill, i) => tag(skill.name, skill.tag, "blue", i))}
        {baSkills.map((skill, i) => tag(skill.name, skill.tag, "red", i))}
      </Flex>
    </Box> */}
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
      <Flex
        mt={{ md: 4, xs: 8 }}
        mb={{ xs: 4 }}
        width={{ md: "100%" }}
        justifyContent={{ md: "center", xs: "center" }}
        alignItems="center"
        color={darkMode ? "#282c35" : "hsla(0,0%,100%,0.88)"}
      >
        {contact.map((contact) => (
          <PseudoBox
            target="_blank"
            href={contact.url}
            as="a"
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
          </PseudoBox>
        ))}
      </Flex>
    </Box>
  </Box>
)
