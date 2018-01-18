import React from 'react'
import Helmet from 'react-helmet'

export default function BlogPost({data}) {

	const {markdownRemark: post} = data

	return (
		<section className="section">
			<div className="container">
				<h1 className="title">
					{post.frontmatter.title}
				</h1>
				<h2 className="subtitle">
					{post.frontmatter.date}
				</h2>
			</div>
			<div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
		</section>
	)
}

export const pageQuery = graphql`
	query BlogPostQuery($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				path
				title
				published
				date
			}
		}
	}
`
