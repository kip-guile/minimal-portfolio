import React from 'react'
import { motion } from 'framer-motion'
import { PseudoBox, Image, Box, Stack, Flex, Tag } from '@chakra-ui/core'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const MotionPseudoBox = motion.custom(PseudoBox)

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
  mid,
}) => {
  const link = `/projects/${path}`
  const midFunction = () => {
    if (darkMode) {
      if (mid) return '#fff7'
      return '#fff2'
    } else {
      if (mid) return 'lightslategrey'
      return 'lightgrey'
    }
  }
  let color = midFunction()
  return (
    <MotionPseudoBox
      w={{ xs: '80%', md: '100%' }}
      mb={{ xs: 10 }}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      gridColumn={gridColumn}
      gridRow={gridRow}
      animate={{ y: [100, -50, 0] }}
      transition={{
        ease: 'easeOut',
        duration: 3,
        times: [0, 0.2, 1],
      }}
    >
      <Image bg={color} src={src} alt={alt} />
      <Box mt={2} h={{ md: '30%' }} w={{ md: '100%' }}>
        <Stack mt={2} spacing={4} isInline mb={3}>
          {arr.map((tech, i) => (
            <Tag
              fontFamily='Crimson Text, serif'
              bg='#ffecb2'
              size='sm'
              key={i}
              variantColor='gray'
            >
              {tech}
            </Tag>
          ))}
        </Stack>
        <Flex justifyContent='space-between'>
          <MotionPseudoBox
            borderBottom={darkMode ? 'solid #ffecb2 1px' : 'solid #282c35 1px'}
            _active={{
              color: darkMode ? '#ffa7c4' : '#00BF86',
              borderBottom: darkMode
                ? 'solid #ffa7c4 1px'
                : 'solid #00BF86 1px',
            }}
            _hover={{
              color: darkMode ? '#ffa7c4' : '#00BF86',
              borderBottom: darkMode
                ? 'solid #ffa7c4 1px'
                : 'solid #00BF86 1px',
            }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            fontFamily='Crimson Text, serif'
          >
            <NavLink to={link}>{name}</NavLink>
          </MotionPseudoBox>
          <Flex justifyContent='space-evenly' fontSize='25px' w='50%'>
            <MotionPseudoBox
              as='a'
              target='_blank'
              href={github}
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
              href={deployed}
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
        </Flex>
      </Box>
    </MotionPseudoBox>
  )
}

export default Project
