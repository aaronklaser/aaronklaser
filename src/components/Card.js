import React from 'react'
import Link from 'gatsby-link'

const Card = (props) => (
	<div className="card">
		{/* <div className="card-image">
			<figure className="image is-4by3">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
			</figure>
		</div> */}
		<div className="card-content">
			<div className="media">
				<div className="media-left">
					<figure className="image is-48x48">
						<img src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg" alt="my image"/>
					</figure>
				</div>
				<div className="media-content">
					<p className="title is-4">{props.title}</p>
					<p className="subtitle is-6">@aaronklaser</p>
				</div>
			</div>

			<div className="content">
				{props.content}
				<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
			</div>
		</div>
	</div>
)

export default Card
