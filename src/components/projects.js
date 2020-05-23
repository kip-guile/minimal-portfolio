import React from "react";
import { PseudoBox, Image, Box, Stack, Flex, Tag, Text } from "@chakra-ui/core";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Project = ({
  gridColumn,
  gridRow,
  src,
  alt,
  arr,
  name,
  github,
  deployed,
}) => (
  <PseudoBox
    w={{ xs: "80%", md: "100%" }}
    mb={{ xs: 10 }}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    gridColumn={gridColumn}
    gridRow={gridRow}
    transition={{ md: "transform .2s" }}
    _hover={{ transform: "scale(0.93)" }}
  >
    <Image src={src} alt={alt} />
    <Box mt={2} h={{ md: "30%" }} w={{ md: "100%" }}>
      <Stack mt={2} spacing={4} isInline mb={3}>
        {arr.map((tech, i) => (
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
      <Flex justifyContent="space-between">
        <Text fontFamily="Cousine, monospace">{name}</Text>
        <Flex justifyContent="space-evenly" fontSize="25px" w="50%">
          <PseudoBox
            as="a"
            target="_blank"
            href={github}
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
            href={deployed}
            _hover={{
              color: "#ffa7c4",
              cursor: "pointer",
            }}
          >
            <AiOutlineLink />
          </PseudoBox>
        </Flex>
      </Flex>
    </Box>
  </PseudoBox>
);

export default Project;
