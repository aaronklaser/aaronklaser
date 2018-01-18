module.exports = {
  siteMetadata: {
    title: `AaronKlaser.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
    // {
    //   resolve: `gatsby-source-medium`,
    //   options: {
    //     username: `aaron.klaser`,
    //   },
    // },
  ],
};
