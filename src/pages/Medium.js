import React from 'react'
import Link from 'gatsby-link'

import MediumArticle from '../components/MediumArticle'

export default function MediumPage({data}) {

	const feed = data.allMediumPost.edges.map(edges => (
		<div key={edges.node.id} style={{ marginTop: 40, marginBottom: 15}}>
			<MediumArticle data={edges.node} />
		</div>
  ))

	return (
		<div>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title" style={{
							paddingLeft: 50
						}}>
							<span className="icon" style={{
								position: 'absolute',
								top: 0,
								left: 8,
							}}>
								<i className="fab fa-lg fa-medium"></i>
							</span>
              Medium
            </h1>
            <h2 className="subtitle">
							Medium is where I ramble and rant and tell stories. I orginally was going to use it as
							a coding blog, I don't like having to use Gist for all my code snippes. So I created this
							site.
            </h2>
						<a className="button is-inverted is-outlined" href="https://medium.com/@aaron.klaser" target="_blank">
							View My Medium
							<span className="icon" style={{ marginLeft: 5 }}>
								<i className="fab fa-lg fa-medium"></i>
							</span>
						</a>
          </div>
        </div>
      </section>

			<div style={{
        margin: '0 auto',
        maxWidth: 800,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
				{feed}
      </div>

    </div>
	)
}

export const pageQuery = graphql`
	query MediumQuery {
		allMediumPost(sort: { fields: [createdAt], order: DESC }) {
			edges {
				node {
					id
					title
					createdAt
					uniqueSlug
					virtuals {
						subtitle
						readingTime
						previewImage {
							imageId
						}
					}
				}
			}
		}
	}
`
