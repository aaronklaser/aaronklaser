import React from 'react'
import Link from 'gatsby-link'

export default function ProjectsPage({data}) {

	return (
		<div>
			<section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
							Protects
            </h1>
            <h2 className="subtitle">
							This is the overview sections for all the projects and tutorial series I'm working on.
							If you think what I'm working is kind of cool and want to learn how it's built, this
							section will contain details on how its built.
            </h2>
          </div>
        </div>
      </section>

			<div style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
      </div>
    </div>
	)
}
