import React from 'react'
import Link from 'gatsby-link'
import Card from './../components/Card'

export default function IndexPage({data}) {

  const posts = data.allMarkdownRemark.edges.map(edge =>
    <li key={edge.node.id}>
      <Link  to={edge.node.frontmatter.path}>Go to {edge.node.frontmatter.title}</Link>
    </li>
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
