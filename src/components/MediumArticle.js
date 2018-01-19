import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

const MomentArticle = ({ data }) => (
	<div>
		<div className="tags has-addons">
			<span className="tag is-primary">{moment(data.createdAt).format('MMM Do')}</span>
			<span className="tag">{moment(data.createdAt).format('YYYY')}</span>
		</div>
		<div className="card">
			{ data.virtuals.previewImage.imageId != ""
				? (<div className="card-image">
						<figure className="image">
							<img src={`https://cdn-images-1.medium.com/max/800/${data.virtuals.previewImage.imageId}`} />
						</figure>
					</div>)
				: "" }
			<div className="card-content">
				<div className="media">
					<div className="media-content" style={{ overflow: 'inherit' }}>
						<p className="title is-4">{data.title}</p>
						{/* <p className="subtitle has-text-link is-7">{moment(data.createdAt).format('MMM Do YYYY')}</p> */}
					</div>
				</div>
				<div className="content">
					{data.virtuals.subtitle}
				</div>
				<div className="has-text-right">
					<a className="button is-small is-link is-outlined"
						href={`https://medium.com/@aaron.klaser/${data.uniqueSlug}`}>
							Read on Medium
					</a>
				</div>
			</div>
		</div>
	</div>
)

export default MomentArticle
