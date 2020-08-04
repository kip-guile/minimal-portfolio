import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { BrowserRouter, Switch } from "react-router-dom"
import { theme } from "@chakra-ui/core"
import "./App.css"
import Main from "./pages/main"
import AboutComponent from "./pages/AboutComponent"
import Projects from "./pages/Projects"
import SingleProject from "./pages/singleProjectView"

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <Switch>
          <Main exact path="/" component={AboutComponent} />
          <Main path="/projects" component={Projects} />
          <Main path="/projects/:project" component={SingleProject} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
