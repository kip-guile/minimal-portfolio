import React from 'react'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import {
  Box,
  Text,
  Image,
  PseudoBox,
  Flex,
  Button,
  Skeleton,
} from '@chakra-ui/core'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { projectDump } from '../components/data'

const MotionPseudoBox = motion.custom(PseudoBox)

const SingleProject = ({ match, history, darkMode }) => {
  const projectName = match.params.project
  const projectFile =
    projectDump.length > 0
      ? projectDump.filter((project) => project.alt === projectName)
      : []

  return (
    <Box
      width={{ md: '75%' }}
      overflowY={{ md: 'auto' }}
      height={{ md: '100vh' }}
      pt={{ md: '7rem' }}
    >
      <Button
        size='xs'
        mt={{ md: 0, xs: 10 }}
        ml={{ md: 0, xs: 5 }}
        onClick={() => history.goBack()}
        leftIcon={IoIosArrowBack}
        variantColor={darkMode ? '#ffa7c4' : '#00BF86'}
        variant='outline'
      >
        Back
      </Button>
      <Box
        w={{ xs: '100%', md: '100%' }}
        display='flex'
        flexDirection={{ xs: 'column' }}
        alignItems={{ xs: 'center' }}
      >
        {projectFile.map((project, i) => (
          <Box
            key={i}
            w={{ xs: '80%', md: '50%' }}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Text
              color={darkMode ? '#ffa7c4' : '#00BF86'}
              fontSize={{ md: 'xxl', xs: '25px' }}
              fontWeight='bold'
              mb={5}
              mt={{ md: 0, xs: 5 }}
              fontFamily='Lato, sans-serif'
            >
              {project.name}
            </Text>
            {project.img ? (
              <Image
                fallbackSrc='https://via.placeholder.com/150'
                src={project.img}
                alt={project.alt}
              />
            ) : (
              <Skeleton w='100%' h='100%' />
            )}
            <Flex
              mt={{ md: 10, xs: 5 }}
              justifyContent='space-evenly'
              fontSize={{ md: 25, xs: 30 }}
              w='50%'
            >
              <MotionPseudoBox
                as='a'
                target='_blank'
                href={project.github}
                _hover={{
                  color: darkMode ? '#ffa7c4' : '#00BF86',
                  cursor: 'pointer',
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
              >
                <AiFillGithub />
              </MotionPseudoBox>
              <MotionPseudoBox
                as='a'
                target='_blank'
                href={project.deployed}
                _hover={{
                  color: darkMode ? '#ffa7c4' : '#00BF86',
                  cursor: 'pointer',
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
              >
                <AiOutlineLink />
              </MotionPseudoBox>
            </Flex>
            <Text
              mt={{ md: 10, xs: 10 }}
              fontSize={{ md: '18px', xs: '16px' }}
              textAlign='justify'
              fontFamily='Crimson Text, serif'
              marginBottom={{ xs: 5 }}
            >
              {project.details}
            </Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Text
          textAlign='center'
          m={5}
          fontFamily='Cousine, monospace'
          fontSize='xs'
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
