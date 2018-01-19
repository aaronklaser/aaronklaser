import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

const BlogFeedItem = ({frontmatter, content}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={frontmatter.icon} alt="Image" />
        </figure>
      </div>
      <div className="media-content">

        <div className="content" dangerouslySetInnerHTML={{ __html: content.split(" ").splice(0,150).join(" ").concat('...') }} />

        <nav className="level">
          <div className="level-left">
            <Link className="level-item button is-small is-link is-outlined" to={frontmatter.path}>Read More</Link>
          </div>
          <div className="level-right">
            <p className="level-item has-text-link is-size-7">
              {moment(frontmatter.date).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MMM Do YYYY'
            })}
            </p>
          </div>
        </nav>
      </div>
    </article>
  </div>
)

export default BlogFeedItem
