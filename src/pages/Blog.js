import React from 'react'
import Link from 'gatsby-link'

import BlogFeedItem from './../components/BlogFeedItem'

export default function BlogPage({data}) {

  const feed = data.allMarkdownRemark.edges.map(edge =>
    <div key={edge.node.id} style={{ marginTop: 40 }}>
			<BlogFeedItem
				content={edge.node.html}
				frontmatter={edge.node.frontmatter}
			/>
    </div>
  )

	return (
		<div>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Code Blog
            </h1>
            <h2 className="subtitle">
            Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least
            try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and
            my <Link to="/projects"><strong>project walkthroughs</strong></Link>.
            </h2>
          </div>
        </div>
      </section>
      <div style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
      {feed}
      {feed}
      {feed}
      {feed}
      </div>
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
            icon
            path
						title
						date
          }
        }
      }
    }
	}
`
