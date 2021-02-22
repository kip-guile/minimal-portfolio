import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Text, Link } from '@chakra-ui/core'
import Project from '../components/projects'
import { fetchProjects } from '../actions/index'
import Skeleton from '../components/skeleton'

const Projects = ({ darkMode, projects, fetchProjects }) => {
  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])
  return (
    <Box
      width={{ md: '75%' }}
      overflowY={{ md: 'auto' }}
      height={{ md: '100vh' }}
      pt={{ md: '7rem' }}
    >
      <Box
        w={{ xs: '100%', md: '100%' }}
        display={{
          md: projects.projects.length > 0 ? 'grid' : 'flex',
          xs: 'flex',
        }}
        flexDirection={{ xs: 'column', md: 'row' }}
        flexWrap={{ md: 'wrap' }}
        alignItems={{ xs: 'center', md: 'center' }}
        justifyContent={{ md: 'center' }}
        gridAutoColumns={{ md: 'auto auto auto' }}
        gridAutoRows={{ md: 'auto auto auto' }}
        gridGap={10}
        padding={{ md: 20, xs: 5 }}
      >
        {projects.projects.length > 0
          ? projects.projects.map((project, i) => (
              <Project
                key={i}
                gridColumn={project.gridColumn}
                gridRow={project.gridRow}
                src={project.src}
                alt={project.alt}
                arr={project.arr}
                name={project.name}
                github={project.github}
                deployed={project.deployed}
                path={project.alt}
                darkMode={darkMode}
                mid={project.mid}
              />
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((num) => <Skeleton key={num} />)}
      </Box>
      <Box>
        <Text
          textAlign='center'
          m={5}
          fontFamily='Cousine, monospace'
          fontSize='xs'
        >
          Illustrations by{' '}
          <Link
            color={darkMode ? '#ffa7c4' : '#00BF86'}
            href='https://iconscout.com/contributors/humaaans/illustrations'
          >
            Pablo Stanley
          </Link>{' '}
          on{' '}
          <Link
            color={darkMode ? '#ffa7c4' : '#00BF86'}
            href='https://iconscout.com/'
          >
            Iconscout
          </Link>
          .
        </Text>
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
  projects: state.projects,
})

export default connect(mapStateToProps, { fetchProjects })(Projects)
