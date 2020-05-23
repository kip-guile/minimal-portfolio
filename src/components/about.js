import React from "react";
import { Box, Text, Flex, Tag, TagLabel, PseudoBox } from "@chakra-ui/core";
import ReactTypingEffect from "react-typing-effect";
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiGit,
  DiPostgresql,
  DiMongodb,
  DiTravis,
  DiMysql,
  DiLinux,
} from "react-icons/di";
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  FaGoodreads,
  FaNodeJs,
  FaVuejs,
  FaLess,
  FaPython,
  FaTrello,
  FaAws,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { GiJesterHat } from "react-icons/gi";

const skills = [
  { tag: DiJavascript1, name: "JavaScript" },
  { tag: DiReact, name: "React" },
  { tag: FaNodeJs, name: "NodeJS" },
  { tag: FaVuejs, name: "Vue" },
  { tag: AiFillHtml5, name: "HTML5" },
  { tag: FaPython, name: "Python" },
  { tag: DiMysql, name: "MySQL" },
  { tag: DiCss3, name: "CSS3" },
  { tag: DiReact, name: "Redux" },
  { tag: DiPostgresql, name: "PostGresDB" },
  { tag: DiMongodb, name: "MongoDB" },
  { tag: FaLess, name: "Less" },
];

const baSkills = [
  { tag: DiGit, name: "Git" },
  { tag: FaAws, name: "AWS" },
  { tag: FaTrello, name: "Trello" },
  { tag: GiJesterHat, name: "Jest" },
  { tag: DiTravis, name: "TravisCI" },
  { tag: DiLinux, name: "Linux" },
  // { tag: BsGraphUp, name: "Requirement Management" },
  { tag: BsGraphUp, name: "Elicitation" },
  { tag: BsGraphUp, name: "Quality Assurance" },
];

const tag = (name, Logo, color, key) => (
  <Box mb={5} key={key}>
    <Tag mr={2} mb={2} variantColor={color} size="md">
      <Logo
        style={{
          backgroundColor: "hsla(0,0%,100%,0.88)",
          color: "#282c35",
          marginRight: "5px",
        }}
      />
      <TagLabel>{<p style={{ fontSize: "0.8em" }}>{name}</p>}</TagLabel>
    </Tag>
  </Box>
);

export const helloBox = (darkMode) => {
  return (
    <Box
      textAlign={{ xs: "center", md: "left" }}
      width="95%"
      minHeight={{ md: "13rem" }}
      display={{ md: "flex" }}
      justifyContent="center"
      alignItems="center"
      borderBottom={{
        md: darkMode ? "0.8em solid #ffecb2" : "0.8em solid #282c35",
      }}
    >
      <Text
        fontSize={{ md: "3xl", xs: "2xl" }}
        fontFamily="Cousine"
        fontWeight="bold"
        color={darkMode ? "#ffa7c4" : "dodgerblue"}
      >
        <ReactTypingEffect text="Hello, I'm Alexander Oguejiofor." />
      </Text>
    </Box>
  );
};

export const middleBox = (darkMode) => (
  <Box
    textAlign={{ xs: "center", md: "left" }}
    display={{ md: "flex" }}
    justifyContent="space-between"
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
      flexBasis={{ md: "61%" }}
      h={{ md: "90%" }}
      p={1}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mt={5}
        mb={5}
        color={darkMode ? "#ffa7c4" : "dodgerblue"}
        fontFamily="Cousine, monospace"
        textAlign="center"
      >
        I'm a Full Stack Web Developer & Business Analyst
      </Text>
      <Text
        fontSize={{ md: "0.9em", xs: "18px" }}
        textAlign="justify"
        fontFamily="Cousine"
        marginBottom={{ xs: 5 }}
      >
        I recently completed Lambda school's Web Development program and have
        been programming consistently for the past year.
      </Text>
      <Text
        fontSize={{ md: "0.9em", xs: "18px" }}
        textAlign="justify"
        fontFamily="Cousine"
        marginBottom={{ xs: 5 }}
      >
        I am also a PMI certified Business Analyst and the skills I gathered
        have come in handy while working on all projects, especially with
        requirement management. At the moment, I'm looking to take the next step
        in my development career.
      </Text>
      <Text
        fontSize={{ md: "0.9em", xs: "18px" }}
        textAlign="justify"
        fontFamily="Cousine"
        marginBottom={{ xs: 5 }}
      >
        I primarily use a PERN stack in my projects. However, I'm constantly
        experimenting with other technoligies and building side projects with
        them.
      </Text>
      <Text
        fontSize={{ md: "0.9em", xs: "18px" }}
        textAlign="justify"
        fontFamily="Cousine"
        marginBottom={{ xs: 5 }}
      >
        When I'm not coding or managing requirements, I most likely have my nose
        in a book. I read a lot of fiction (80 -100 a year, a lot less now), and
        it is my favorite past time activity. Feel free to follow me on
        goodreads.
      </Text>
      <Text
        fontSize={{ md: "0.9em", xs: "18px" }}
        textAlign="justify"
        fontFamily="Cousine"
        marginBottom={{ xs: 5 }}
      >
        If you're still reading up to this point, odds are youre cool and/or
        youre interested in what I can do. Reach out for a quick conversation.
      </Text>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{ md: "space-around", xs: "center" }}
      flexBasis={{ md: "33%" }}
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
    </Box>
  </Box>
);

export const contactBox = (darkMode) => (
  <Box
    display="flex"
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
      mb={3}
      fontFamily="Cousine, monospace"
      color={darkMode ? "#ffa7c4" : "dodgerblue"}
    >
      Get in touch
    </Text>
    <PseudoBox
      _hover={{
        color: darkMode ? "#ffa7c4" : "dodgerblue",
        borderBottom: darkMode ? "solid #ffa7c4 1px" : "solid dodgerblue 1px",
        cursor: "pointer",
      }}
      as="a"
      href="mailto:oguejioforalexander@gmail.com"
      borderBottom={darkMode ? "solid #ffecb2 1px" : "solid #282c35 1px"}
    >
      oguejioforalexander@gmail.com
    </PseudoBox>
    <Flex
      mt={4}
      width={{ md: "30%" }}
      justifyContent="flex-start"
      alignItems="center"
      color={darkMode ? "#282c35" : "hsla(0,0%,100%,0.88)"}
    >
      <PseudoBox
        target="_blank"
        href="https://www.linkedin.com/in/alexanderoguejiofor/"
        as="a"
        _hover={{
          backgroundColor: darkMode ? "#ffa7c4" : "dodgerblue",
          cursor: "pointer",
        }}
        display="flex"
        p={3}
        borderRadius="50%"
        bg={darkMode ? "#ffecb2" : "#282c35"}
      >
        <AiFillLinkedin fontSize="2rem" />
      </PseudoBox>
      <PseudoBox
        target="_blank"
        href="https://www.goodreads.com/user/show/26479310-pokerface"
        as="a"
        _hover={{
          backgroundColor: darkMode ? "#ffa7c4" : "dodgerblue",
          cursor: "pointer",
        }}
        display="flex"
        ml={5}
        mr={5}
        p={3}
        borderRadius="50%"
        bg={darkMode ? "#ffecb2" : "#282c35"}
      >
        <FaGoodreads fontSize="2rem" />
      </PseudoBox>
      <PseudoBox
        target="_blank"
        href="https://github.com/kip-guile"
        as="a"
        _hover={{
          backgroundColor: darkMode ? "#ffa7c4" : "dodgerblue",
          cursor: "pointer",
        }}
        display="flex"
        p={3}
        borderRadius="50%"
        bg={darkMode ? "#ffecb2" : "#282c35"}
      >
        <AiFillGithub fontSize="2rem" />
      </PseudoBox>
    </Flex>
  </Box>
);
