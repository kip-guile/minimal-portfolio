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
  { tag: BsGraphUp, name: "Requirement Management" },
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
    p={{ md: 0, xs: 5 }}
    minHeight={{ md: "27rem" }}
  >
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      flexBasis={{ md: "31%" }}
      h={{ md: "90%" }}
      p={1}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mt={5}
        mb={5}
        color="#ffa7c4"
        fontFamily="Cousine, monospace"
        textAlign="justify"
      >
        I'm a Full Stack Web Developer & Business Analyst
      </Text>
      <Text
        fontSize={{ xs: "18px" }}
        textAlign="justify"
        fontFamily="Cousine"
        paddingBottom={{ md: 20 }}
      >
        with a passion for collaboration, and bringing useful ideas to fruition.
        Constantly looking to ask the right questions
      </Text>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      flexBasis={{ md: "30%" }}
      h={{ md: "90%" }}
      p={2}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mt={5}
        mb={5}
        fontFamily="Cousine, monospace"
        color="#ffa7c4"
        textAlign="center"
      >
        Skills
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {skills.map((skill, i) => tag(skill.name, skill.tag, "blue", i))}
      </Flex>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{ md: "space-around", xs: "center" }}
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
        textAlign="center"
      >
        Tools
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
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
      width={{ md: "30%" }}
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
