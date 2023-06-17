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
        AF Hello Gatsby
      </h1>
      <p>AF made this page using Gatsby. Here are a few notes:
        <ul>
        <li>
          The project was started using the gatsby CLI (setup with "npm install -g gatsby-cli") command "gatsby new" as described&nbsp;
          <a href="https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/">here</a>. Then cut out most of the junk.
        </li>
        <li>
          The source code is hosted at Github&nbsp;
          <a href="https://github.com/adamfinkelstein/hello-gatsby">here</a>.
        </li>
        <li>
          It relies on the continuous deployment workflow described in&nbsp;
          <a href="https://medium.com/@sam-king/deploying-a-gatsby-site-to-github-pages-using-github-actions-ci-cd-be0465a8cdb8">this Medium post</a>.
        </li>
        <li>
          It is published using Github Pages as described&nbsp;
          <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site">here</a> and&nbsp;
          <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site">here</a>.
        </li>
        </ul>
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>AF Hello Gatsby</title>
