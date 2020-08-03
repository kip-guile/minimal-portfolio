import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Box } from "@chakra-ui/core"
import { Route } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"

const Main = ({ component: Component, darkMode, ...rest }) => {
  const [page, setPage] = useState("")
  useEffect(() => {
    rest.path === "/" ? setPage("about") : setPage("projects")
  }, [rest.path])

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Box
            w={{ md: "100vw", xs: "95vw" }}
            h={{ md: "100vh" }}
            display={{ md: "flex", xs: "flex" }}
            flexDirection={{ md: "row", xs: "column" }}
            bg={darkMode ? "#282c35" : "rgb(255, 255, 255)"}
            color={darkMode ? "hsla(0,0%,100%,0.88)" : "#282c35"}
          >
            <HeaderComponent page={page} />
            <Component {...props} />
          </Box>
        )
      }}
    />
  )
}

const mapStateToProps = (state) => ({
  darkMode: state.dark,
})

export default connect(mapStateToProps)(Main)
