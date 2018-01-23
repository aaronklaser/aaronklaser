import React from 'react'
import Link from 'gatsby-link'

export default function IndexPage({data}) {

	return (
		<div>

      <section className="hero is-purple">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Welcome to my site!
            </h1>
            <h2 className="subtitle">
            I am a former .Net MVC Developer that became an early adopter of Angularjs now with more
            of experience in front-end architecture. I have built multiple enterprise level web and mobile
            apps using Angular, Ionic, React, React Native, Node, and too many JavaScript librarys to list.
            </h2>
          </div>
        </div>
      </section>

      <div style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 40
      }}>
        <div className="tile is-ancestor" >
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-info">
                  <p className="title">Code Blog</p>
                  <p className="content">
                    Your standard JavaScript programming blog, albeit, probably not very good, but I will at least
                    try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and
                    my project walkthroughs.
                  </p>
                  <div className="has-text-right">
                    <Link className="button is-info is-inverted is-outlined" to="/blog">Go to Blog</Link>
                  </div>
                </article>
                <article className="tile is-child notification is-dark">
                  <p className="title">Medium</p>
                  <p className="content">Medium is where I ramble and rant and tell stories. I orginally was going to use it as
                    a coding blog, I don't like having to use Gist for all my code snippets. So I created this
                    site.
                  </p>
                  <div className="has-text-right">
                    <Link className="button is-dark is-inverted is-outlined" to="/medium">Go to Medium</Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
                <p className="title">Projects</p>
                <p className="content">
                  This is the overview sections for all the projects and tutorial series I'm working on.
                  If you think what I'm working is kind of cool and want to learn how it's built, this
                  section will contain details on how its built.
                </p>
                <div className="has-text-right">
                  <Link className="button is-primary is-inverted is-outlined" to="/projects">Go to Projects</Link>
                </div>
            </article>
          </div>
        </div>
      </div>
    </div>
	)
}

// export const pageQuery = graphql`
// 	query IndexQuery {
// 		allMarkdownRemark(
//       limit: 2
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
// 					html
//           id
//           frontmatter {
//             icon
//             path
//             title
//             status
// 						date
//           }
//         }
//       }
//     }
// 	}
// `
