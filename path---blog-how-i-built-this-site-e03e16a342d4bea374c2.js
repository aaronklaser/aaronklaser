webpackJsonp([0xc7850fd6df7a],{321:function(n,t){n.exports={data:{markdownRemark:{html:'<h1>How I Built This Site</h1>\n<p>This site uses a small handful of up and coming technologies. The core of the application is Gatsby, a static site generator built on React, with Bulma as the CSS framework.</p>\n<p>It took me about <strong>5 days</strong>, including learning Gatsby, to get the site "framed out" and write the first post. Here are the steps in my learning process:</p>\n<ol>\n<li><strong>Learn Gatsby</strong>\nFirst I need to do some tutorials, so my friend sent me a link to some YouTube videos he used to learn Gatsby.\n<a href="https://www.youtube.com/watch?v=b2H7fWhQcdE">https://www.youtube.com/watch?v=b2H7fWhQcdE</a></li>\n</ol>\n<p>I later realized he was doing three of the guides on the Gatsby website. Never the less, his training worked, and I was rocking and rolling.</p>\n<ol start="2">\n<li><strong>Setup a simple blog from .md files</strong>\n<a href="https://www.gatsbyjs.org/docs/adding-markdown-pages/">https://www.gatsbyjs.org/docs/adding-markdown-pages/</a></li>\n</ol>\n<p>In this step, I followed along with the YouTube video series to get the pages in place. It took awhile to understand how the create pages stuff work on the gatsby-nodes file.</p>\n<ol start="3">\n<li><strong>Add in Bulma</strong>\n<a href="https://bulma.io/documentation/overview/start/">https://bulma.io/documentation/overview/start/</a></li>\n</ol>\n<p>I recently found Bulma while reading article about JavaScript 2017 Rising Stars <a href="https://risingstars.js.org/2017/en/#section-css-in-js">https://risingstars.js.org/2017/en/#section-css-in-js</a></p>\n<p>Since I hate bootstrap because EVERYONE uses it, I decided to give it a try, and so far I love it. I also LOVE Google Material but its starting to get a bit overused as well, plus its a bit too... fun... for the look I was going for.</p>\n<ol start="4">\n<li><strong>Navigation</strong>\n<a href="https://bulma.io/documentation/components/navbar/">https://bulma.io/documentation/components/navbar/</a></li>\n</ol>\n<p>React makes things easy, try putting Bumla in Angular... good luck.</p>\n<ol start="5">\n<li><strong>Setup Medium Feed</strong>\n<a href="https://www.gatsbyjs.org/packages/gatsby-source-medium/">https://www.gatsbyjs.org/packages/gatsby-source-medium/</a></li>\n</ol>\n<p>This step was a real headache. The current medium plugin does not work for users, only publications. I had to change three lines of code and copy it into my gatsby-node.js file to get it to work.</p>\n<p>The guy that sits next to me at work has created a pull request to fix the plugin. I was going to but he wanted to do it, and I wanted to work on this.</p>\n<ol start="6">\n<li>\n<p><strong>Deploy to Github Pages</strong>\n<a href="https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/">https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/</a></p>\n</li>\n<li>\n<p><strong>Setup Custom URL for Github Pages</strong>\nJust add the plug and point it to your repo.</p>\n</li>\n</ol>\n<p>For me my set up is weird. I use Bitbucket for all my private repos, plus I cannot push to Github at work. So I have to do a bunch of push pull push pull.</p>\n<p>Also, if you are using Source Tree like me instead of Github Desktop, you will have to remove 2 Factor Auth from Github -_-</p>\n<ol start="8">\n<li><strong>Style Clean Up</strong>\nI still haven\'t figured this out completely. Every time I push to gh-pages branch it resets my Custom Domain in the repo settings and I have to add aaronklaser.com back in. I tried the CNAME but that does not help.</li>\n</ol>\n<p>Also, if you are using a custom domain, do not include the prefix in your gatsby-config.</p>\n<ol start="9">\n<li><strong>Fix Mobile Nav</strong>\nYou will need to add your own Javascript to make this work.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tisActive<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token function-variable function">toggleNav</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>prevState <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\tisActive<span class="token punctuation">:</span> <span class="token operator">!</span>prevState<span class="token punctuation">.</span>isActive\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button navbar-burger<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token attr-value"><span class="token punctuation">=</span>{this.toggleNav}</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span>{</span> <span class="token attr-name">this.state.isActive</span> <span class="token attr-name">?</span> <span class="token attr-name">\'navbar-menu</span> <span class="token attr-name">is-active\'</span> <span class="token attr-name">:</span> <span class="token attr-name">\'navbar-menu\'}</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<ol start="10">\n<li><strong>Create this post</strong>\nA simple outline for now. I\'m planning to break this into smaller sections and each of these 10 steps will be in its own .md file that gits pulled together into a project and included in the blog feed.</li>\n</ol>',frontmatter:{path:"/blog/how-i-built-this-site",title:"How I Built This Site",status:"IN_PROGRESS",date:"2018-01-22"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-how-i-built-this-site-e03e16a342d4bea374c2.js.map