import React from 'react'
import Helmet from 'react-helmet'

export default function Blog({data}) {

	const {contentfulBlogPost: post} = data

	console.log('=== DATA ===', data)

	return (
		<div>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content.content }} />
		</div>
	)
}

export const pageQuery = graphql`
	query blogPostQuery($path: String!) {
		contentfulBlogPost(path: { eq: $path }) {
			id
			path
			title
			createdAt
			content {
				id
				content
			}
		}
	}
`
