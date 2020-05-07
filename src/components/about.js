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
} from "react-icons/di";
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaGoodreads, FaNodeJs, FaVuejs, FaLess } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const skills = [
  { tag: DiJavascript1, name: "JavaScript" },
  { tag: DiReact, name: "React" },
  { tag: FaNodeJs, name: "NodeJS" },
  { tag: FaVuejs, name: "Vue" },
  { tag: AiFillHtml5, name: "HTML5" },
  { tag: DiCss3, name: "CSS3" },
  { tag: DiReact, name: "Redux" },
  { tag: DiGit, name: "Git" },
  { tag: DiPostgresql, name: "PostGresDB" },
  { tag: DiMongodb, name: "MongoDB" },
  { tag: DiTravis, name: "TravisCI" },
  { tag: FaLess, name: "Less" },
];

const baSkills = [
  { tag: BsGraphUp, name: "Requirement Management" },
  { tag: BsGraphUp, name: "Elicitation" },
  { tag: BsGraphUp, name: "Quality Assurance" },
];

const tag = (name, Logo, color, key) => (
  <Box mb={5} key={key}>
    <Tag mr={2} mb={2} variantColor={color} rounded="full" size="sm">
      <Logo
        style={{ backgroundColor: "hsla(0,0%,100%,0.88)", color: "#282c35" }}
      />
      <TagLabel>{name}</TagLabel>
    </Tag>
  </Box>
);

export const helloBox = () => {
  return (
    <Box
      textAlign={{ xs: "center", md: "left" }}
      width="95%"
      minHeight={{ md: "13rem" }}
      display={{ md: "flex" }}
      justifyContent="center"
      alignItems="center"
      borderBottom={{ md: "0.8em solid #ffecb2" }}
    >
      <Text
        fontSize={{ md: "3xl", xs: "2xl" }}
        fontFamily="Cousine"
        fontWeight="bold"
        color="#ffa7c4"
      >
        <ReactTypingEffect text="Hello, I'm Alexander Oguejiofor." />
      </Text>
    </Box>
  );
};

export const middleBox = (
  <Box
    textAlign={{ xs: "center", md: "left" }}
    display={{ md: "flex" }}
    justifyContent="space-between"
    alignItems="center"
    borderBottom={{ md: "0.8em solid #ffecb2" }}
    w="95%"
    minHeight={{ md: "27rem" }}
  >
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex start"
      flexBasis={{ md: "31%" }}
      h={{ md: "90%" }}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mt={5}
        mb={5}
        color="#ffa7c4"
        fontFamily="Cousine, monospace"
      >
        I'm a Full Stack Web Developer
      </Text>
      <Text fontSize="sm" fontFamily="Cousine">
        with a passion for clean code, collaboration, and bringing delightful
        ideas to fruition.
      </Text>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex start"
      flexBasis={{ md: "30%" }}
      h={{ md: "90%" }}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mt={5}
        mb={5}
        fontFamily="Cousine, monospace"
        color="#ffa7c4"
      >
        I'm a Business Analyst
      </Text>
      <Text fontSize="sm" fontFamily="Cousine">
        with experience in Needs Assessment, Planning, Requirement elicitation,
        and Solution Evaluation. I am especially interested in providing useful
        solutions, improving business processes and maintaining cost efficiency.
      </Text>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{ md: "flex-start", xs: "center" }}
      w={{ md: "30%" }}
      h={{ md: "90%" }}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mt={5}
        mb={5}
        fontFamily="Cousine, monospace"
        color="#ffa7c4"
      >
        Skills
      </Text>
      <Flex wrap="wrap" justifyContent="space-evenly">
        {skills.map((skill, i) => tag(skill.name, skill.tag, "blue", i))}
        {baSkills.map((skill, i) => tag(skill.name, skill.tag, "red", i))}
      </Flex>
    </Box>
  </Box>
);

export const contactBox = (
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
      color="#ffa7c4"
    >
      Get in touch
    </Text>
    <PseudoBox
      _hover={{
        color: "#ffa7c4",
        borderBottom: "solid #ffa7c4 1px",
        cursor: "pointer",
      }}
      as="a"
      href="mailto:oguejioforalexander@gmail.com"
      borderBottom="solid #ffecb2 1px"
    >
      oguejioforalexander@gmail.com
    </PseudoBox>
    <Flex
      mt={4}
      width="30%"
      justifyContent="flex-start"
      alignItems="center"
      color="#282c35"
    >
      <PseudoBox
        target="_blank"
        href="https://www.linkedin.com/in/alexanderoguejiofor/"
        as="a"
        _hover={{
          backgroundColor: "#ffa7c4",
          cursor: "pointer",
        }}
        display="flex"
        p={3}
        borderRadius="50%"
        bg="#ffecb2"
      >
        <AiFillLinkedin fontSize="2rem" />
      </PseudoBox>
      <PseudoBox
        target="_blank"
        href="https://www.goodreads.com/user/show/26479310-pokerface"
        as="a"
        _hover={{
          backgroundColor: "#ffa7c4",
          cursor: "pointer",
        }}
        display="flex"
        ml={5}
        mr={5}
        p={3}
        borderRadius="50%"
        bg="#ffecb2"
      >
        <FaGoodreads fontSize="2rem" />
      </PseudoBox>
      <PseudoBox
        target="_blank"
        href="https://github.com/kip-guile"
        as="a"
        _hover={{
          backgroundColor: "#ffa7c4",
          cursor: "pointer",
        }}
        display="flex"
        p={3}
        borderRadius="50%"
        bg="#ffecb2"
      >
        <AiFillGithub fontSize="2rem" />
      </PseudoBox>
    </Flex>
  </Box>
);
