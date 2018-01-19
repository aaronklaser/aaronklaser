webpackJsonp([49683490770531],{313:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:"<h2>Doing Angular the React way</h2>\n<p>** Preface **\nWhen I first sat down to write this I expected it to be short and simple, but as I dug in to my explanations and examples, I realized I had a lot more I wanted to share on my take on doing Angular 2 the right way, and may be completely wrong.</p>\n<p>I have decide to turn this into a series which I will be writing about over the next few days, weeks, months… who knows. Lets see where the internet takes us. But let me very up front about something now…</p>\n<p>I AM NOT A WRITER … nor can my brain keep up with my fingers when I type, so this will be FULL of grammar errors and run on sentences. I know, I get it. I will try to do my best proof reading but I can’t promise anything. My tip to you is to just read everything with a Russian accent (which I don’t have) but that usually making things entertaining. Enjoy!</p>\n<p>** Chapter One **\nI have been doing Angular development for over 4 years and for the last 2 years I have been Angular 2/4/5/whatever (I will refer to it as Angular). But about a year ago I started to get into functional programming, and let me tell you, its changed my life about as much as finding Angular 1. But I learned quickly Angular, with its deeply ingrained object oriented designed, made doing things functional… well… difficult. Especially if you wanted to adhere to strict immutability. That’s when decided to look into the library everybody was raving about being the greatest think ever written… React!</p>\n<p>At first, I thought this was the answer to all my problems, the solution to all my complaints. But I quickly realized that while yes it did address a lot of my complaints, it had its own set of equally frustrating issues. I built a few simple web pages, made an app using React Native, but at the end of the it found myself just as frustrated with React as I did with Angular. But I was determined because, and still feel this way, React is the better framework.</p>\n<p>The Problem(s)\nMy top 3 of each but not limited to</p>\n<p>React:\nSO MANY OPTIONS… seriously… There are so many libraries to choose from I would spend time more looking at libraries then I would building.\nThings get dirty fast, every tiny little thing gets its own class and file and you have to figure out what to name it and where to put it and even after 10 years of programming I don’t care what anyone says, naming files and setting up code structure is the hardest thing about programming\nCode is noisy, the html mixed with javascript is not something we are use to seeing, and while its the real star behind React, it’s make the code get cluttered fast. Then, when you add Redux you start mapping state to props and bind actions to the class, it’s just… ugly.\nAngular 2:\nUnit test are a nightmare because someone has a semi for dependency injection. It no jokes take 50 lines of code just to set up unit test for a single file. I still haven’t figured our how to test Services the Angular way.\nThey encourage you to manipulate class variables being used in the view. This causes a lot of void function that simply mutate data instead if create function that take in data and return something new.\nDeleting items from Observables. Observables are a bit mysterious, they are lightning fast array like data structures that can be updated repeatedly without from any where in the app. A bit like quantum entanglement. But they are unindexed and while you can add to them and magically update them they lack the ability to remove an item from the list. This last let people to do things with like cache the data in a service which they mutate and return as an Observable.\nFinding current answers to questions… good luck. This is caused by a couple of things. A.) They change up so much from iteration to iteration and everything was a breaking change 2.) The name is basically the same as angular 1 while the frameworks couldn’t be more different. III.) The damn thing was in beta longer then its been out and 3 months after v2.0… here’s v4.0!!! WHAT! It’s just confusing.\n** Oh yeah, and lets make 4 completely different ways create forms because we want people to have options but good luck because we are changing those too!\nThe Solution\nDo Angular the React way… (better put the Redux way)</p>\n<p>NgRx was the secret to this success. By extracting all your app state and data into a store, it makes writing your Angular a breeze. When we take that beautiful immutable idea and add in some functional concepts our code becomes neat and organized and easy to test.</p>\n<p>Before we go further, here are some simple rules I follow.</p>\n<p>Rule 1:\nExternalize callbacks. Always call a functions for success/error of a promise or subscription, never do the function inside the .subscribe() or .then() like you will see in EVERY EXAMPLE</p>\n<p>** Why **\nDoing this makes unit tests easier… much easier. Now, we don’t have to mock the return for .getData() or force it to resolve or anything. All we care about is that .getData was called. We can test returning anything we want in the setData() function. This also means we can create a test single object for each service that can be reused in all our specs.</p>\n<p>Rule 2:\nDon’t do things the TypeScript way. I would say just don’t use typescript but if you thought finding answers to questions was hard before, try finding answers in ES6. Write your TypeScript as if it was Javascript. Forget about creating types and models.</p>\n<p>** Why **\nSure it makes your code safer but it certainly doesn’t make it cleaner. It also keeps your code closer to javascript so in 1–4 years when something better comes along (cough Vue, cough) You can reuse as much code as possible without the need to convert it from TypeScript to JavaScript. I think readability and reusability outweighs types safe pre transpiled code.</p>\n<p>Rule 3:\nAlways try to be declarative. Use .map() .filter() .reduce() ect… instead of things like complex for loops. Even using a library like Ramda or Lodash.</p>\n<p>** Why **\nDeclarative code abstracts the logic from your code, and instead makes code more descriptive and focuses on what the code is doing an less on how code is doing it.</p>\n<p>What’ Next…\nI still don’t see how this is doing Angular the React way…</p>\n<p>Don’t worry, I’ll feed you baby bird. As stated in my Preface, this topic kind of blow up in my hands so I’m making it a series. Next we will build some of the obligatory Todo Apps… Yay!!</p>\n<p>We will build one in React and one in Angular 2 and step through the good, the bad, and the ugly.\nAfter that will step though an Angular Todo App the React way.\nWe will take a short side quest and learn Fractal File Sturctures\nFinally, I will unveil my own app starter, codenamed… Reangular (or maybe Wrangular 🤔 )</p>",id:"/Users/e062110/WebstormProjects/gatsby-site/src/pages/blog/first-post.md absPath of file >>> MarkdownRemark",frontmatter:{icon:"https://rangle.io/images/services/custom-angular-react-training-01.svg",path:"/blog/first-post",title:"Doing Angular the React way",date:"2018-01-04"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---blog-f5b1df40c1855a6ef3cd.js.map