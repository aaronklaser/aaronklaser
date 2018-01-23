import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'
import BlogStatusTag from '../components/BlogStatusTag'

export default function BlogPost({data}) {

	const {markdownRemark: post} = data

	return (
		<div style={{
			margin: '0 auto',
			maxWidth: 960,
			padding: '0px 1.0875rem 1.45rem',
			paddingTop: 20
		}}>
			<nav className="level">
				<div className="level-left">
					<Link className="level-item button is-small is-link is-outlined" to="/blog">Back to Blog</Link>
				</div>
				<div className="level-right">
					{/* {tag(post.frontmatter.status)} */}
					<BlogStatusTag status={post.frontmatter.status} />
					<p className="level-item has-text-link is-size-7">
						{moment(post.frontmatter.date).calendar(null, {
							sameDay: '[Today]',
							lastDay: '[Yesterday]',
							lastWeek: '[Last] dddd',
							sameElse: 'MMM Do YYYY'
					})}
					</p>
				</div>
			</nav>
			<div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}

export const pageQuery = graphql`
	query BlogPostQuery($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				path
				title
				status
				date
			}
		}
	}
`
