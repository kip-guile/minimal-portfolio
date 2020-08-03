import React from "react"
import { connect } from "react-redux"
import { Box } from "@chakra-ui/core"
import { logoBox, navLinks, nameBox } from "./header"
import { toggleDark } from "../actions"
import { motion } from "framer-motion"

const HeaderComponent = ({ toggleDark, darkMode, page }) => {
  console.log(darkMode)
  const MotionBox = motion.custom(Box)
  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 3,
  }
  return (
    <Box
      display={{ md: "flex" }}
      textAlign={{ xs: "center" }}
      flexDirection={{ md: "column" }}
      alignItems={{ md: "center" }}
      flexBasis={{ md: "25%" }}
      height={{ md: "100vh" }}
    >
      {logoBox(darkMode)}
      {nameBox(darkMode)}
      {navLinks(darkMode, page)}
      <Box display="flex" justifyContent="center">
        <Box
          w={{ md: "4rem", xs: "4rem" }}
          h={{ md: "2rem", xs: "2rem" }}
          bg={darkMode ? "#ffa7c4" : "#00BF86"}
          display="flex"
          justifyContent={darkMode ? "flex-start" : "flex-end"}
          borderRadius={{ md: "2rem", xs: "2rem" }}
          padding={{ md: "0.27rem", xs: "0.27rem" }}
          cursor="pointer"
          onClick={toggleDark}
        >
          <MotionBox
            w={{ md: "1.5rem", xs: "1.5rem" }}
            h={{ md: "1.5rem", xs: "1.5rem" }}
            backgroundColor="white"
            borderRadius={{ md: "1.5rem", xs: "1.5rem" }}
            transition={spring}
            whileHover={{ scale: 1.2 }}
          ></MotionBox>
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  darkMode: state.dark,
})

export default connect(mapStateToProps, { toggleDark })(HeaderComponent)
