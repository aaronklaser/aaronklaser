import React from 'react'
import Link from 'gatsby-link'

export default function ProjectsPage({data}) {

	return (
		<div>
			 <section class="section">
				<div class="container">
					<h1 class="title">Section</h1>
					<h2 class="subtitle">
						A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
					</h2>
				</div>
			</section>

			<div class="field is-grouped is-grouped-multiline">
				<div class="control">
					<div class="tags has-addons">
						<span class="tag is-dark">npm</span>
						<span class="tag is-info">0.5.0</span>
					</div>
				</div>

				<div class="control">
					<div class="tags has-addons">
						<span class="tag is-dark">build</span>
						<span class="tag is-success">passing</span>
					</div>
				</div>

				<div class="control">
					<div class="tags has-addons">
						<span class="tag is-dark">chat</span>
						<span class="tag is-primary">on gitter</span>
					</div>
				</div>
			</div>
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
      </div>
    </div>
	)
}