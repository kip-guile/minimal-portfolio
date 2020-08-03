import React from "react"
import { PseudoBox, Image, Box, Stack, Flex, Tag } from "@chakra-ui/core"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const Project = ({
  gridColumn,
  gridRow,
  src,
  alt,
  arr,
  name,
  github,
  deployed,
  path,
  darkMode,
}) => {
  const link = `/projects/${path}`
  return (
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
              fontFamily="Crimson Text, serif"
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
          <PseudoBox
            borderBottom={darkMode ? "solid #ffecb2 1px" : "solid #282c35 1px"}
            _active={{
              color: darkMode ? "#ffa7c4" : "#00BF86",
              borderBottom: darkMode
                ? "solid #ffa7c4 1px"
                : "solid #00BF86 1px",
            }}
            _hover={{
              color: darkMode ? "#ffa7c4" : "#00BF86",
              borderBottom: darkMode
                ? "solid #ffa7c4 1px"
                : "solid #00BF86 1px",
            }}
            fontFamily="Crimson Text, serif"
          >
            <NavLink to={link}>{name}</NavLink>
          </PseudoBox>
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
  )
}

export default Project
