/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Murendeni Mukwevho`,
        siteUrl: `https://www.mukwevhom.xyz`,
        description: `Welcome to official website of Mukwevho Murendeni`,
        author: `Mukwevho Murendeni`,
        test:`test`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "GTM-5C9R6CZ"
                ],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-robots-txt'
    ],
}
