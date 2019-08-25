import React from "react";
import { useStaticQuery,graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default (props) => {
    const { site } = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);
    return (
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{site.siteMetadata.title}</title>
            <meta name="keywords" content="Mukwevho Murendeni, Mukwevho, Murendeni, Fileboxer, Music Brackts, Web Developer, Inbound, MukwevhoM, iammurendeni" />
            <meta name="description" content="Welcome to Official Website of Mukwevho Murendeni" />
            <meta name="p:domain_verify" content="69ec3689df39c65b2c238394e38470d8" />
            <link rel="canonical" href="http://mukwevhom.com" />
            <script src="https://unpkg.com/feather-icons"></script>
        </Helmet>
    )
}