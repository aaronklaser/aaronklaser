---
type: 'local'
project: 'gatsby-site'
icon: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgZmlsbD0iIzc0NGM5ZSIgd2lkdGg9IjEyMDBweCIgaGVpZ2h0PSIxMjAwcHgiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyMDAgMTIwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTYwMCwyOC42NDRDMjg0LjQ0OSwyOC42NDQsMjguNjQ0LDI4NC40NDgsMjguNjQ0LDYwMGMwLDMxNS41NTMsMjU1LjgwNiw1NzEuMzU2LDU3MS4zNTYsNTcxLjM1Ng0KCQkJYzMxNS41NTMsMCw1NzEuMzU2LTI1NS44MDQsNTcxLjM1Ni01NzEuMzU2QzExNzEuMzU2LDI4NC40NDgsOTE1LjU1MywyOC42NDQsNjAwLDI4LjY0NHogTTE1MS40MTQsNjA1Ljk1Nmw0NDIuNjI5LDQ0Mi42Mw0KCQkJQzM1MC45ODksMTA0NS40MTgsMTU0LjU4MSw4NDkuMDEsMTUxLjQxNCw2MDUuOTU2eiBNNzAwLjQxNywxMDM3LjM3TDE2Mi42Myw0OTkuNTgzQzIwOC4yMzIsMzAwLjE0MiwzODYuNzM0LDE1MS4zMzksNjAwLDE1MS4zMzkNCgkJCWMxNDkuMDc3LDAsMjgxLjE0Nyw3Mi43MjcsMzYyLjczNCwxODQuNjE2bC02Mi4xMiw1NC44MTJDODM0LjQzMywyOTUuODU5LDcyNC40NzgsMjMzLjc0Niw2MDAsMjMzLjc0Ng0KCQkJYy0xNTguNDg1LDAtMjkzLjQ0NywxMDAuNjY4LTM0NC40NiwyNDEuNTQ1bDQ2OS4xNyw0NjkuMTdjMTEzLjkzOC00MS4yNiwyMDEuNTY2LTEzNy40NCwyMzAuOTE0LTI1Ni41Nkg3NjEuMTUydi04Ny45aDIwNS4xMDINCgkJCXYtMC4wMDJoODIuNDA3VjYwMEMxMDQ4LjY2MSw4MTMuMjY2LDg5OS44NTksOTkxLjc2OCw3MDAuNDE3LDEwMzcuMzd6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo='
path: '/blog/how-i-built-this-site'
title: 'How I Built This Site'
status: 'IN_PROGRESS'
published: true
date: '2018-01-22'
---

# How I Built This Site

This site uses a small handful of up and coming technologies. The core of the application is Gatsby, a static site generator built on React, with Bulma as the CSS framework.

It took me about **5 days**, including learning Gatsby, to get the site "framed out" and write the first post. Here are the steps in my learning process:

 1. **Learn Gatsby**
First I need to do some tutorials, so my friend sent me a link to some YouTube videos he used to learn Gatsby.
[https://www.youtube.com/watch?v=b2H7fWhQcdE](https://www.youtube.com/watch?v=b2H7fWhQcdE)

I later realized he was doing three of the guides on the Gatsby website. Never the less, his training worked, and I was rocking and rolling.

 2. **Setup a simple blog from .md files**
[https://www.gatsbyjs.org/docs/adding-markdown-pages/](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

In this step, I followed along with the YouTube video series to get the pages in place. It took awhile to understand how the create pages stuff work on the gatsby-nodes file.

 3. **Add in Bulma**
[https://bulma.io/documentation/overview/start/](https://bulma.io/documentation/overview/start/)

I recently found Bulma while reading article about JavaScript 2017 Rising Stars https://risingstars.js.org/2017/en/#section-css-in-js

Since I hate bootstrap because EVERYONE uses it, I decided to give it a try, and so far I love it. I also LOVE Google Material but its starting to get a bit overused as well, plus its a bit too... fun... for the look I was going for.

 4. **Navigation**
[https://bulma.io/documentation/components/navbar/](https://bulma.io/documentation/components/navbar/)

React makes things easy, try putting Bumla in Angular... good luck.

 5. **Setup Medium Feed**
[https://www.gatsbyjs.org/packages/gatsby-source-medium/](https://www.gatsbyjs.org/packages/gatsby-source-medium/)

This step was a real headache. The current medium plugin does not work for users, only publications. I had to change three lines of code and copy it into my gatsby-node.js file to get it to work.

The guy that sits next to me at work has created a pull request to fix the plugin. I was going to but he wanted to do it, and I wanted to work on this.

 6. **Deploy to Github Pages**
[https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)

 7. **Setup Custom URL for Github Pages**
 Just add the plug and point it to your repo.

For me my set up is weird. I use Bitbucket for all my private repos, plus I cannot push to Github at work. So I have to do a bunch of push pull push pull.

Also, if you are using Source Tree like me instead of Github Desktop, you will have to remove 2 Factor Auth from Github -_-

 8. **Style Clean Up**
 I still haven't figured this out completely. Every time I push to gh-pages branch it resets my Custom Domain in the repo settings and I have to add aaronklaser.com back in. I tried the CNAME but that does not help.

Also, if you are using a custom domain, do not include the prefix in your gatsby-config.

 9. **Fix Mobile Nav**
You will need to add your own Javascript to make this work.

``` js
state = {
	isActive: false,
}

toggleNav = () => {
	this.setState(prevState => ({
		isActive: !prevState.isActive
	}))
}
```

``` html
<button className="button navbar-burger" onClick={this.toggleNav}>
	<span></span>
	<span></span>
	<span></span>
</button>

<div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
```


 10. **Create this post**
A simple outline for now. I'm planning to break this into smaller sections and each of these 10 steps will be in its own .md file that gits pulled together into a project and included in the blog feed.
