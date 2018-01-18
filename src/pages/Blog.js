import React from 'react'
import Link from 'gatsby-link'

import BlogFeedItem from './../components/BlogFeedItem'

export default function BlogPage({data}) {

  const feed = data.allMarkdownRemark.edges.map(edge =>
    <div key={edge.node.id}>
			{/* <pre>{JSON.stringify(edge, null, 2)}</pre> */}
			<BlogFeedItem
				content={edge.node.html}
				frontmatter={edge.node.frontmatter}
			/>
    </div>
  )

	return (
		<div>
      {feed}
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
					html
          id
          frontmatter {
            path
						title
						date
          }
        }
      }
    }
	}
`
