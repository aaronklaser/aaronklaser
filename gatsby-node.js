/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {

	const { createPage } = boundActionCreators

	local(createPage, graphql)
	contentful(createPage, graphql)
}

function local(createPage, graphql) {
	const postTemplate = path.resolve('src/templates/Post.js')

	return graphql(`{
		allMarkdownRemark(
			filter: {
				frontmatter: {
					type: { eq: "local" }
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
					}
				}
			}
		}
	}`)
	.then(res => {
		//console.log('Data', res.data.allMarkdownRemark.edges)
		if(res.errors) {
			//console.log('Error', res.errors);
			return Promise.reject(res.errors)
		}

		res.data.allMarkdownRemark.edges.forEach(({node}) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate
			})
		});
	})
}

function contentful(createPage, graphql) {
	const blogTemplate = path.resolve('src/templates/Blog.js')

	return graphql(`{
		allContentfulBlogPost {
			edges {
				node {
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
		}
	}`)
	.then(res => {
		console.log('Data', res.data.allContentfulBlogPost.edges)
		if(res.errors) {
			console.log('Error', res.errors);
			return Promise.reject(res.errors)
		}

		res.data.allContentfulBlogPost.edges.forEach(({node}) => {
			createPage({
				path: node.path,
				component: blogTemplate
			})
		});
	})
}
