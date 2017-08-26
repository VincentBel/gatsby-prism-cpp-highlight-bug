/* eslint-disable no-console */
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const blogPost = path.resolve('./src/templates/BlogPost.js')
  const graphqlQuery = `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `

  return graphql(graphqlQuery).then((result) => {
    if (result.errors) {
      console.log(result.errors)
      Promise.reject(result.errors)
    }

    // Create blog posts pages.
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      const postPath = edge.node.frontmatter.path
      createPage({
        path: postPath,
        component: blogPost,
        context: {
          path: postPath,
        },
      })
    })
  })
}
