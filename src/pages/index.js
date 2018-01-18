import React from 'react'
import Link from 'gatsby-link'
import Card from './../components/Card'

export default function IndexPage({data}) {

  const posts = data.allMarkdownRemark.edges.map(edge =>
    <div key={edge.node.id}>
      <Link to={edge.node.frontmatter.path}>Go to {edge.node.frontmatter.title}</Link>
    </div>
  )

  const blogs = data.allContentfulBlogPost.edges.map(edge =>
      <Card title={edge.node.title}
            content={edge.node.content.content}
            key={edge.node.id}>
      </Card>
  )

	return (
		<div>
      {blogs}
      <br/>
      <br/>
      {posts}
    </div>
	)
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: {
            eq: true
          }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            published
          }
        }
      }
    },
    allContentfulBlogPost {
      edges {
        node {
          id
          path
          title
          createdAt
          content {
            content
          }
        }
      }
    }
	}
`
