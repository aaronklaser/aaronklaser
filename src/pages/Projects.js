import React from 'react'
import Link from 'gatsby-link'

import Project from './projects/Project'

export default function ProjectsPage({data}) {

	return (
		<div>
			<section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
							Projects
            </h1>
            <h2 className="subtitle">
							This is the overview sections for all the projects and tutorial series I'm working on.
							If you think what I'm working is kind of cool and want to learn how it's built, this
							section will contain details on how its built.
            </h2>
          </div>
        </div>
      </section>

{/* <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside> */}

			<div style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
        <Project />
      </div>
    </div>
	)
}
