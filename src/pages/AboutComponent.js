import React, { useState } from 'react'
import { Box } from '@chakra-ui/core'
import { connect } from 'react-redux'
import { helloBox, middleBox, contactBox } from '../components/about'

const AboutComponent = ({ darkMode }) => {
  const [moreInfo, setMoreInfo] = useState(false)
  const toggleInfoBox = () => {
    setMoreInfo(!moreInfo)
  }
  return (
    <Box
      flexBasis={{ md: '75%' }}
      display={{ md: 'flex' }}
      flexDirection={{ md: 'column' }}
      alignItems={{ md: 'flex-start' }}
      overflow={{ md: 'auto' }}
      height={{ md: '100%' }}
    >
      {helloBox(darkMode)}
      {middleBox(darkMode, moreInfo, toggleInfoBox)}
      {contactBox(darkMode)}
    </Box>
  )
}

const mapStateToProps = (state) => ({
  darkMode: state.dark,
})

export default connect(mapStateToProps)(AboutComponent)
