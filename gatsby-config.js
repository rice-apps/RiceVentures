module.exports = {
  siteMetadata: {
    title: "Rice Ventures",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "4DZJrp942QSzUzIxzKLTn1goYu4gnPxA7e0Wi9uhm1k",
        spaceId: "bx4zniztm489",
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-163693054-4",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
