import React from "react"
import { connect } from "react-redux"
import { Box, Text, Image, PseudoBox, Flex } from "@chakra-ui/core"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
import { projectDump } from "../components/data"

const SingleProject = ({ match, darkMode }) => {
  const projectName = match.params.project
  const projectFile = projectDump.filter(
    (project) => project.alt === projectName
  )
  return (
    <Box
      width={{ md: "75%" }}
      overflowY={{ md: "auto" }}
      height={{ md: "100vh" }}
      pt={{ md: "7rem" }}
    >
      <Box
        w={{ xs: "100%", md: "100%" }}
        display="flex"
        flexDirection={{ xs: "column" }}
        alignItems={{ xs: "center" }}
      >
        {projectFile.map((project, i) => (
          <Box
            key={i}
            w={{ xs: "80%", md: "50%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              color={darkMode ? "#ffa7c4" : "#00BF86"}
              fontSize={{ md: "xxl", xs: "25px" }}
              fontWeight="bold"
              mb={5}
              mt={{ md: 0, xs: 5 }}
              fontFamily="Lato, sans-serif"
            >
              {project.name}
            </Text>
            <Image src={project.img} alt={project.alt} />
            <Flex
              mt={{ md: 10, xs: 5 }}
              justifyContent="space-evenly"
              fontSize={{ md: 25, xs: 30 }}
              w="50%"
            >
              <PseudoBox
                as="a"
                target="_blank"
                href={project.github}
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
                href={project.deployed}
                _hover={{
                  color: "#ffa7c4",
                  cursor: "pointer",
                }}
              >
                <AiOutlineLink />
              </PseudoBox>
            </Flex>
            <Text
              mt={{ md: 10, xs: 10 }}
              fontSize={{ md: "18px", xs: "16px" }}
              textAlign="justify"
              fontFamily="Crimson Text, serif"
              marginBottom={{ xs: 5 }}
            >
              {project.details}
            </Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Text
          textAlign="center"
          m={5}
          fontFamily="Cousine, monospace"
          fontSize="xs"
        >
          © 2020 Alexander Oguejiofor
        </Text>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  darkMode: state.dark,
})

export default connect(mapStateToProps)(SingleProject)
