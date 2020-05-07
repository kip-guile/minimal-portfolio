import React from "react";
import { Box, Text, PseudoBox, Image, Tag, Stack, Flex } from "@chakra-ui/core";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import pure from "../image/Frame_1.png";
import book from "../image/book_spren.png";
import lambda from "../image/lambda_door.png";
import split from "../image/split.png";

const Projects = () => {
  return (
    <Box
      width={{ md: "75%" }}
      overflowY={{ md: "auto" }}
      height={{ md: "100vh" }}
      pt={{ md: "12rem" }}
    >
      <Box
        w={{ xs: "100%", md: "100%" }}
        display={{ md: "grid", xs: "flex" }}
        flexDirection={{ xs: "column" }}
        alignItems={{ xs: "center" }}
        gridAutoColumns={{ md: "28% 28% 28%" }}
        gridTemplateRows={{
          md: "calc(2em * 10) calc(2em * 5) calc(2em * 5)",
        }}
        gridGap={10}
      >
        <PseudoBox
          w={{ xs: "80%", md: "100%" }}
          mb={{ xs: 10 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gridColumn="1/2"
          gridRow="1/2"
          transition={{ md: "transform .2s" }}
          _hover={{ transform: "scale(0.93)" }}
        >
          <Image src={pure} alt="pure-retail" />
          <Box mt={2} h={{ md: "30%" }} w={{ md: "100%" }}>
            <Flex justifyContent="space-between">
              <Text fontFamily="Cousine, monospace">Pure Retail</Text>
              <Flex justifyContent="space-evenly" fontSize="25px" w="50%">
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://github.com/LABS-EU3/shopping_cart_backend"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiFillGithub />
                </PseudoBox>
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://pure-retail.com/"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineLink />
                </PseudoBox>
              </Flex>
            </Flex>
            <Stack mt={2} spacing={4} isInline>
              {["React", "NodeJS", "MongoDB"].map((tech, i) => (
                <Tag
                  fontFamily="Cousine, monospace"
                  bg="#ffecb2"
                  size="sm"
                  key={i}
                  variantColor="gray"
                >
                  {tech}
                </Tag>
              ))}
            </Stack>
          </Box>
        </PseudoBox>
        <PseudoBox
          w={{ xs: "80%", md: "100%" }}
          mb={{ xs: 10 }}
          gridColumn="2/3"
          gridRow="1/3"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          transition={{ md: "transform .2s" }}
          _hover={{ transform: "scale(0.93)" }}
        >
          <Image src={lambda} alt="lambda-door" />
          <Box mt={2} h={{ md: "30%" }} w={{ md: "100%" }}>
            <Flex justifyContent="space-between">
              <Text fontFamily="Cousine, monospace">Lambda Door</Text>
              <Flex justifyContent="space-evenly" fontSize="25px" w="50%">
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://github.com/Labs-EU-Flex/lambda-door-client"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiFillGithub />
                </PseudoBox>
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://lambdadooreuflex.netlify.app/"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineLink />
                </PseudoBox>
              </Flex>
            </Flex>
            <Stack mt={2} spacing={4} isInline>
              {["React", "NodeJS", "PostGres"].map((tech, i) => (
                <Tag
                  fontFamily="Cousine, monospace"
                  bg="#ffecb2"
                  size="sm"
                  key={i}
                  variantColor="gray"
                >
                  {tech}
                </Tag>
              ))}
            </Stack>
          </Box>
        </PseudoBox>
        <PseudoBox
          w={{ xs: "80%", md: "100%" }}
          mb={{ xs: 10 }}
          gridColumn="3/4"
          gridRow="1/2"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          transition={{ md: "transform .2s" }}
          _hover={{ transform: "scale(0.93)" }}
        >
          <Image src={book} alt="book-spren" />
          <Box mt={2} h={{ md: "30%" }} w={{ md: "100%" }}>
            <Flex justifyContent="space-between">
              <Text fontFamily="Cousine, monospace">Book Spren</Text>
              <Flex justifyContent="space-evenly" fontSize="25px" w="50%">
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://github.com/kip-guile/Lit-spren"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiFillGithub />
                </PseudoBox>
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://book-spren.firebaseapp.com/login"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineLink />
                </PseudoBox>
              </Flex>
            </Flex>
            <Stack mt={2} spacing={4} isInline>
              {["React", "NodeJS", "Firebase"].map((tech, i) => (
                <Tag
                  fontFamily="Cousine, monospace"
                  bg="#ffecb2"
                  size="sm"
                  key={i}
                  variantColor="gray"
                >
                  {tech}
                </Tag>
              ))}
            </Stack>
          </Box>
        </PseudoBox>
        <PseudoBox
          w={{ xs: "80%", md: "100%" }}
          mb={{ xs: 10 }}
          gridColumn="3/4"
          gridRow="2/3"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          transition={{ md: "transform .2s" }}
          _hover={{ transform: "scale(0.93)" }}
        >
          <Image src={split} alt="split-the-bill" />
          <Box mt={2} h={{ md: "30%" }} w={{ md: "100%" }}>
            <Flex justifyContent="space-between">
              <Text fontFamily="Cousine, monospace">Split the bill</Text>
              <Flex justifyContent="space-evenly" fontSize="25px" w="50%">
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://github.com/kip-guile/split-the-bill"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiFillGithub />
                </PseudoBox>
                <PseudoBox
                  as="a"
                  target="_blank"
                  href="https://split-the-bill-six-alpha.now.sh/"
                  _hover={{
                    color: "#ffa7c4",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineLink />
                </PseudoBox>
              </Flex>
            </Flex>
            <Stack mt={2} spacing={4} isInline>
              {["React", "NodeJS", "PostGres"].map((tech, i) => (
                <Tag
                  fontFamily="Cousine, monospace"
                  bg="#ffecb2"
                  size="sm"
                  key={i}
                  variantColor="gray"
                >
                  {tech}
                </Tag>
              ))}
            </Stack>
          </Box>
        </PseudoBox>
      </Box>
      <Box>
        <Text m={5} fontFamily="Cousine, monospace" fontSize="xs">
          © 2020 Alexander Oguejiofor
        </Text>
      </Box>
    </Box>
  );
};

export default Projects;
