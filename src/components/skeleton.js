import React from 'react'
import { Skeleton, Box } from '@chakra-ui/core'

const SkeletonC = () => {
  return (
    <Box
      w={{ xs: '80%', md: '15rem' }}
      h={{ xs: '10rem', md: '15rem' }}
      mb={{ xs: 10 }}
      display='flex'
    >
      <Skeleton height='100%' w='100%' />
    </Box>
  )
}

export default SkeletonC
