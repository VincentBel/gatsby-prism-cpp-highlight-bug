import React from 'react'

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: { markdownRemark: { html, frontmatter: { title } } },
    } = this.props

    return (
      <section>
        <h1>
          {title}
        </h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    )
  }
}

export default BlogPostTemplate

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
