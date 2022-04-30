module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          // Defaults used for gatsbyImageData and StaticImage
          defaults: {},
          // Set to false to allow builds to continue on image errors
          failOnError: true,
          // deprecated options and their defaults:
          base64Width: 20,
          forceBase64Format: `jpg`, 
          useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
          stripMetadata: true,
          defaultQuality: 50,
        },
      },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
  ],
}