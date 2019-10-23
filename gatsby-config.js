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
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: "UA-92610979-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-robots-txt'
    ],
}
