module.exports = {
  siteMetadata: {
    title: `AaronKlaser.com`,
  },
  //pathPrefix: "/aaronklaser",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112949543-1",
        anonymize: false,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@aaron.klaser`,
      },
    },
  ],
};
