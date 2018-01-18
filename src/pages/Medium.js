import React from 'react'
import Link from 'gatsby-link'

export default function MediumPage({data}) {

	return (
		<div>
			<p>
				Medium is where I ramble and rant and tell stories. I orginally was going to use it as
				a coding blog, I don't like having to use Gist for all my code snippes. So I created this
				site.
			</p>
			<p>
				As soon as I can figure out who to pull in my Medium articles
				this will show a feed of my most recent Medium posts.
				In the mean time just click this button and check out my Medium posts.
				<a className="button" href="https://medium.com/@aaron.klaser">
					<span className="icon" style={{ marginRight: 5 }}>
						<i className="fab fa-lg fa-medium"></i>
					</span>
					View My Medium
				</a>
			</p>
    </div>
	)
}
