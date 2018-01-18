import React from 'react'
import Link from 'gatsby-link'
import * as moment from 'moment'

const BlogFeedItem = ({frontmatter, content}) => (
	<section className="section">
    <div className="container">
      <h1 className="title">{frontmatter.title}</h1>
      <h2 className="subtitle">
        {frontmatter.date}
      </h2>
    </div>
		<div className="content" dangerouslySetInnerHTML={{ __html: content }} />
		<Link className="button is-small is-outlined" to={frontmatter.path}>Read More</Link>
		<hr />
  </section>
)

export default BlogFeedItem
