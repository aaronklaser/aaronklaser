/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const path = require('path')

const pages = [
	{
		path: '/blog',
		component: path.resolve('src/pages/Blog.js')
	},
	{
		path: '/medium',
		component: path.resolve('src/pages/Medium.js')
	},
	{
		path: '/projects',
		component: path.resolve('src/pages/Projects.js')
	}
]

exports.createPages = ({ boundActionCreators, graphql }) => {

	const { createPage } = boundActionCreators

	sitePages(createPage, pages)
	local(createPage, graphql)
}

function sitePages(createPage, pages) {
	pages.forEach(page =>
		createPage({
			path: page.path,
			component: page.component
		})
	)
}

function local(createPage, graphql) {

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
						icon
						path
						title
					}
				}
			}
		}
	}`)
	.then(res => {
		if(res.errors) { return Promise.reject(res.errors) }

		res.data.allMarkdownRemark.edges.forEach(({node}) => {
			createPage({
				path: node.frontmatter.path,
				component: path.resolve('src/templates/BlogPost.js')
			})
		});
	})
}
