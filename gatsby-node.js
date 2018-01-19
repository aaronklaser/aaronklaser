/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const path = require('path')

const pages = [
	{
		path: '/blog',
		component: path.resolve('src/pages/Blog.js')
	},
	{
		path: '/medium',
		component: path.resolve('src/pages/Medium.js')
	},
	{
		path: '/projects',
		component: path.resolve('src/pages/Projects.js')
	}
]

exports.createPages = ({ boundActionCreators, graphql }) => {

	const { createPage } = boundActionCreators

	sitePages(createPage, pages)
	local(createPage, graphql)
}

function sitePages(createPage, pages) {
	pages.forEach(page =>
		createPage({
			path: page.path,
			component: page.component
		})
	)
}

function local(createPage, graphql) {

	return graphql(`{
		allMarkdownRemark(
			filter: {
				frontmatter: {
					type: { eq: "local" }
				}
			}
		) {
			edges {
				node {
					html
					id
					frontmatter {
						icon
						path
						title
					}
				}
			}
		}
	}`)
	.then(res => {
		if(res.errors) { return Promise.reject(res.errors) }

		res.data.allMarkdownRemark.edges.forEach(({node}) => {
			createPage({
				path: node.frontmatter.path,
				component: path.resolve('src/templates/BlogPost.js')
			})
		});
	})
}

///////////////
// TEMPORARY //
///////////////

// *** Medium Fix for Userpost *** //

"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require(`axios`);
var crypto = require(`crypto`);

var fetch = function fetch(username) {
  var url = `https://medium.com/${username}/latest?format=json`;
  return axios.get(url);
};

var prefix = `])}while(1);</x>`;

var convertTimestamps = function convertTimestamps(nextObj, prevObj, prevKey) {
  if (typeof nextObj === `object`) {
    Object.keys(nextObj).map(function (key) {
      return convertTimestamps(nextObj[key], nextObj, key);
    });
  } else {
    if (typeof nextObj === `number` && nextObj >> 0 !== nextObj) {
      var date = new Date(nextObj);
      if (date.getTime() === nextObj) {
        prevObj[prevKey] = date.toISOString().slice(0, 10);
      }
    }
  }
};

var strip = function strip(payload) {
  return payload.replace(prefix, ``);
};

exports.sourceNodes = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref, _ref2) {
    var boundActionCreators = _ref.boundActionCreators;
    var username = '@aaron.klaser';//_ref2.username;

    var createNode, _Array$prototype, result, json, posts, collectionKeys, userKeys, importableResources, resources;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode;
            _context.prev = 1;
            _context.next = 4;
            return fetch(username);

          case 4:
            result = _context.sent;
            json = JSON.parse(strip(result.data));
            posts = Object.values(json.payload.references.Post);
            collectionKeys = Object.keys(json.payload.references.Post);
            userKeys = Object.keys(json.payload.references.User);
            importableResources = [userKeys.map(function (key) {
              return json.payload.references.User[key];
            }), posts, collectionKeys.map(function (key) {
              return json.payload.references.Post[key];
            })];
            resources = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, importableResources);

            resources.map(function (resource) {
              convertTimestamps(resource);

              var digest = crypto.createHash(`md5`).update(JSON.stringify(resource)).digest(`hex`);

              var links = resource.type === `Post` ? {
                author___NODE: resource.creatorId
              } : resource.type === `User` ? {
                posts___NODE: posts.filter(function (post) {
                  return post.creatorId === resource.userId;
                }).map(function (post) {
                  return post.id;
                })
              } : {};

              var node = Object.assign(resource, {
                id: resource.id ? resource.id : resource.userId,
                parent: `__SOURCE__`,
                children: [],
                internal: {
                  type: `Medium${resource.type}`,
                  contentDigest: digest
                }
              }, links);

              createNode(node);
            });
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);

            console.error(_context.t0);
            process.exit(1);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 14]]);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();
