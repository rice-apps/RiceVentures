const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Rice Ventures",
  },
  plugins: [
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "4DZJrp942QSzUzIxzKLTn1goYu4gnPxA7e0Wi9uhm1k",
        spaceId: "bx4zniztm489",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-163693054-4",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
