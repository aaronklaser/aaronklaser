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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qu10m4oq2u62`,
        accessToken: `59a002dcb56a4b623927cb28aed7c63076aa5a1b7916faaaf33b7b82c4fdcfc4`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    }
  ],
};
