import React from 'react'
import { Box, Text, Flex, PseudoBox, Image, Link } from '@chakra-ui/core'
import { contact } from './data'
import { motion } from 'framer-motion'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import useIcon from './customHooks'
import avatar from '../image/avatar.png'

const MotionFlex = motion.custom(Flex)
const MotionPseudoBox = motion.custom(PseudoBox)
const MotionBox = motion.custom(Box)

export const helloBox = (darkMode) => {
  return (
    <MotionBox
      textAlign={{ xs: 'center', md: 'left' }}
      width='95%'
      minHeight={{ md: '13rem' }}
      display={{ md: 'flex', xs: 'none' }}
      justifyContent='center'
      alignItems='center'
      animate={{ x: [-30, 30, 0] }}
      transition={{
        ease: 'easeOut',
        duration: 1.5,
        times: [0, 0.2, 1],
      }}
    >
      <Text
        fontSize='7vw'
        fontFamily='Lato, sans-serif'
        fontWeight='bold'
        color={darkMode ? '#ffa7c4' : '#00BF86'}
      >
        Alexander Oguejiofor
      </Text>
    </MotionBox>
  )
}

export const middleBox = (darkMode, moreInfo, toggleInfoBox) => (
  <Box
    textAlign={{ xs: 'center', md: 'left' }}
    display={{ md: 'flex' }}
    flexDirection={{ md: 'column' }}
    justifyContent='center'
    alignItems='center'
    borderBottom={{
      md: darkMode ? '0.8em solid #ffecb2' : '0.8em solid #282c35',
    }}
    w='95%'
    p={{ md: 0, xs: 5 }}
  >
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-around'
      flexBasis={{ md: '30%' }}
      w={{ md: '50%' }}
      p={1}
    >
      <PseudoBox
        w={{ xs: '80%', md: '100%' }}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingBottom={{ xs: '10px', md: '20px' }}
      >
        <Image
          bg={darkMode ? '#fff2' : ''}
          borderRadius={10}
          fallbackSrc={{
            md: 'https://via.placeholder.com/400',
            xs: 'https://via.placeholder.com/250',
          }}
          size={{ md: '400px', xs: '200px' }}
          src={avatar}
          alt='avatar'
        />
      </PseudoBox>
    </Box>
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      flexBasis={{ md: '55%' }}
      w={{ md: '60%' }}
      p={1}
    >
      <Text
        fontSize={{ md: '18px', xs: '16px' }}
        textAlign='justify'
        fontFamily='Crimson Text, serif'
        marginBottom={{ xs: 5 }}
      >
        I am a full stack web developer. I love to make things work on the web,
        and the things that work already, work even better.
      </Text>
      <Text
        fontSize={{ md: '18px', xs: '16px' }}
        textAlign='justify'
        fontFamily='Crimson Text, serif'
        marginBottom={{ xs: 5 }}
      >
        Most of my work day to day is in React/Redux/Node architecture and its
        ecosystem
      </Text>
      <Box display='flex' alignItems='center' marginBottom={{ xs: 5 }}>
        {moreInfo ? (
          <AiFillCaretDown onClick={toggleInfoBox} cursor='pointer' />
        ) : (
          <AiFillCaretRight onClick={toggleInfoBox} cursor='pointer' />
        )}
        <Text
          fontSize={{ md: '18px', xs: '16px' }}
          textAlign='justify'
          fontFamily='Crimson Text, serif'
          marginLeft={{ xs: 2 }}
        >
          Some other things
        </Text>
      </Box>
      <Box
        opacity={moreInfo ? 1 : 0}
        maxHeight={moreInfo ? 10000 : 0}
        transition='max-height 0.3s ease-out, opacity 0.5s'
        overflow='hidden'
      >
        <Text
          fontSize={{ md: '18px', xs: '16px' }}
          textAlign='justify'
          fontFamily='Crimson Text, serif'
          marginBottom={{ xs: 5 }}
        >
          - When I'm not hacking out code, I more than likely have my head stuck
          in some work of fiction, and i make{' '}
          <Link
            color={darkMode ? '#ffa7c4' : '#00BF86'}
            href='https://www.youtube.com/channel/UCFnWwjzniuSeXUb_n0tG0QA'
          >
            video reviews
          </Link>{' '}
          about some of the books I read. My favorite genre is Epic/High
          Fantasy.
        </Text>
        <Text
          fontSize={{ md: '18px', xs: '16px' }}
          textAlign='justify'
          fontFamily='Crimson Text, serif'
          marginBottom={{ xs: 5 }}
        >
          - I also like sharing my knowledge of the things I learn by writing{' '}
          <Link
            color={darkMode ? '#ffa7c4' : '#00BF86'}
            href='https://dev.to/master_elodin'
          >
            blog posts
          </Link>{' '}
          on Dev.to
        </Text>
        <Text
          fontSize={{ md: '18px', xs: '16px' }}
          textAlign='justify'
          fontFamily='Crimson Text, serif'
          marginBottom={{ xs: 5 }}
        >
          - I am a{' '}
          <Link
            color={darkMode ? '#ffa7c4' : '#00BF86'}
            href='https://www.pmi.org/certifications/types/business-analysis-pba'
          >
            PMI certified
          </Link>{' '}
          Business Analyst and the skills I acquired have come in handy with
          managing requirements on all projects.
        </Text>
        <Text
          fontSize={{ md: '18px', xs: '16px' }}
          textAlign='justify'
          fontFamily='Crimson Text, serif'
          marginBottom={{ xs: 5 }}
        >
          - I am a{' '}
          <Link
            color={darkMode ? '#ffa7c4' : '#00BF86'}
            href='https://lambdaschool.com/'
          >
            BloomTech
          </Link>{' '}
          ( formerly Lambda School ) Alum
        </Text>
      </Box>
      <Text
        fontSize={{ md: '18px', xs: '16px' }}
        textAlign='justify'
        fontFamily='Crimson Text, serif'
        marginBottom={{ xs: 5 }}
      >
        "The more you learn, the more your realize how little you know. Still,
        the struggle itself is worthwile." -{' '}
        <Link
          color={darkMode ? '#ffa7c4' : '#00BF86'}
          href='https://lambdaschool.com/'
        >
          Joe Abercrombie, The Blade Itself
        </Link>
      </Text>
      <Text
        fontSize={{ md: '18px', xs: '16px' }}
        textAlign='justify'
        fontFamily='Crimson Text, serif'
        marginBottom={{ xs: 5 }}
      >
        A quote from one of my favorite authors. Might be its not original as it
        is a derivative of Aristotle's quote. You take this idea a little
        further and might also be you can apply{' '}
        <Link
          color={darkMode ? '#ffa7c4' : '#00BF86'}
          href='https://www.youtube.com/watch?v=GiPe1OiKQuk'
        >
          Rumsfeld's famous quote
        </Link>{' '}
        about unknown unknowns.
      </Text>
      <Text
        fontSize={{ md: '18px', xs: '16px' }}
        textAlign='justify'
        fontFamily='Crimson Text, serif'
        marginBottom={{ xs: 5 }}
      >
        I apply these ideas heuristically to my career, and as such I consider
        myself a lifelong learner, always curious and looking to grow and
        improve.
      </Text>
      <Text
        fontSize={{ md: '18px', xs: '16px' }}
        textAlign='justify'
        fontFamily='Crimson Text, serif'
        marginBottom={{ xs: 5 }}
      >
        If you're still reading up to this point, odds are you're interesting
        and / or you're interested in what I can do. Happy to have a
        conversation. Please{' '}
        <Link
          color={darkMode ? '#ffa7c4' : '#00BF86'}
          href='mailto:oguejioforalexander@gmail.com'
        >
          reach out
        </Link>
        .
      </Text>
    </Box>
  </Box>
)

export const contactBox = (darkMode) => (
  <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems={{ md: 'center', xs: 'center' }}
    w='95%'
    h={{ md: '2500px' }}
    minHeight={{ md: '13rem' }}
  >
    <Text
      fontSize='lg'
      fontWeight='bold'
      textAlign='center'
      mb={{ md: 0, xs: 6 }}
      mt={1}
      fontFamily='Lato, sans-serif'
      color={darkMode ? '#ffa7c4' : '#00BF86'}
      display='flex'
      alignItems='center'
      justifyContent='center'
      w='95%'
    >
      Get in touch
    </Text>

    <MotionFlex
      mt={{ md: 4 }}
      mb={{ md: 1, xs: 4 }}
      animate={{ x: [100, -50, 0] }}
      transition={{
        ease: 'easeOut',
        duration: 1.5,
        times: [0, 0.2, 1],
      }}
      width={{ md: '100%', xs: '50%' }}
      h={{ md: '3.5', xs: '7rem' }}
      flexWrap='wrap'
      justifyContent={{ md: 'center', xs: 'space-evenly' }}
      alignItems={{ md: 'center' }}
      color={darkMode ? '#282c35' : 'hsla(0,0%,100%,0.88)'}
    >
      {contact.map((contact, i) => (
        <MotionPseudoBox
          key={i}
          h={{ md: '3.5rem', xs: '2.5rem' }}
          w={{ md: '3.5rem', xs: '2.5rem' }}
          target='_blank'
          href={contact.url}
          as='a'
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.8 },
          }}
          _hover={{
            backgroundColor: darkMode ? '#ffa7c4' : '#00BF86',
            cursor: 'pointer',
          }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          ml={{ md: i === 0 ? 0 : 4, xs: 2 }}
          p={3}
          borderRadius='50%'
          bg={darkMode ? '#ffecb2' : '#282c35'}
        >
          {useIcon(contact.name)}
        </MotionPseudoBox>
      ))}
    </MotionFlex>
  </Box>
)
