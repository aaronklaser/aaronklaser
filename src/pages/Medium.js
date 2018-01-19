import React from 'react'
import Link from 'gatsby-link'

export default function MediumPage({data}) {

	return (
		<div>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
							<span className="icon" style={{ marginRight: 10 }}>
								<i className="fab fa-lg fa-medium"></i>
							</span>
              Medium
            </h1>
            <h2 className="subtitle">
							Medium is where I ramble and rant and tell stories. I orginally was going to use it as
							a coding blog, I don't like having to use Gist for all my code snippes. So I created this
							site.
            </h2>
          </div>
        </div>
      </section>
      <div className="content" style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 40
      }}>
				<p>
					As soon as I can figure out who to pull in my Medium articles
					this will show a feed of my most recent Medium posts.
					In the mean time just click this button and check out my Medium posts.
				</p>
				<a className="button" href="https://medium.com/@aaron.klaser" target="_blank">
					View My Medium
					<span className="icon" style={{ marginLeft: 5 }}>
						<i className="fab fa-lg fa-medium"></i>
					</span>
				</a>
      </div>
    </div>
		// <div className="content">
		// 	<p>
		// 		Medium is where I ramble and rant and tell stories. I orginally was going to use it as
		// 		a coding blog, I don't like having to use Gist for all my code snippes. So I created this
		// 		site.
		// 	</p>
		// 	<p>
		// 		As soon as I can figure out who to pull in my Medium articles
		// 		this will show a feed of my most recent Medium posts.
		// 		In the mean time just click this button and check out my Medium posts.
		// 	</p>
		// 	<a className="button" href="https://medium.com/@aaron.klaser" target="_blank">
		// 		View My Medium
		// 		<span className="icon" style={{ marginLeft: 5 }}>
		// 			<i className="fab fa-lg fa-medium"></i>
		// 		</span>
		// 	</a>
    // </div>
	)
}
