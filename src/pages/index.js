import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 24,
  fontFamily: "Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1>
        Hello Gatsby
      </h1>
      <p>AF aded this.</p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
