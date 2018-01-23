import React from 'react'
import Link from 'gatsby-link'

const pkg = require(`../../../package.json`)

export default function ProjectsPage({data}) {

  //console.log(pkg)

	return (
		<div>
			 <section className="section">
				<div className="container">
					<h1 className="title">aaronklaser.com</h1>
					<h2 className="subtitle">
						A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
					</h2>
				</div>
			</section>

			<div className="field is-grouped is-grouped-multiline">
				<div className="control">
					<div className="tags has-addons">
						<span className="tag is-dark">Version</span>
						<span className="tag is-info">
              {pkg.version}
            </span>
					</div>
				</div>

				<div className="control">
					<div className="tags has-addons">
						<span className="tag is-dark">Gatsby</span>
            <span className="tag is-purple">
            {/* 1.9.153 */}
              {pkg.dependencies.gatsby.replace(/\^/g, '')}
            </span>
					</div>
				</div>

				<div className="control">
					<div className="tags has-addons">
						<span className="tag is-dark">Bulma</span>
            <span className="tag is-primary">
            {/* 0.6.2 */}
            {pkg.dependencies.bulma.replace(/\^/g, '')}
            </span>
					</div>
				</div>
			</div>

      <a className="github-button" href="https://github.com/aaronklaser/aaronklaser" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star aaronklaser/aaronklaser on GitHub">Star</a>
{/* <aside className="menu">
  <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p className="menu-label">
    Administration
  </p>
  <ul className="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a className="is-active">Manage Your Team</a>
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
  <p className="menu-label">
    Transactions
  </p>
  <ul className="menu-list">
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
      </div>
    </div>
	)
}