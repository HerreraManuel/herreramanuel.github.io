import * as React from "react"
import "./styles.sass"
import Box from "@material-ui/core/Box"

const IndexPage = () => {
  return (
    <main>
      <title>Manuel Herrera</title>
      <Box 
      display="flex"
      justifyContent="center"
      >
      <div>
        <h1 id="name">Manuel Herrera</h1>
        <p id="intro">First-generation college graduate who is interested in Software Development.</p>
      </div>
      </Box>
    </main>
  )
}

export default IndexPage
