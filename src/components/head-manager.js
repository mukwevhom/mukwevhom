import React from "react";
import { useStaticQuery,graphql } from "gatsby";
import { Helmet } from "react-helmet";

const HeaderManager = (props) => {
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
        <Helmet
                meta={[
                    { name: 'description', content: 'Developer based in South Africa' },
                    { name: 'google-site-verification', content: 'ojFr1wa1XQWEoRJft3h_XuYa6mGRSi1n6hML9up4xuc' },
                    { name: 'keywords', content: 'Mukwevho Murendeni, Mukwevho, Murendeni, Fileboxer, Music Brackts, Web Developer, Inbound, MukwevhoM, iammurendeni'},
                    { name:"p:domain_verify", content:"69ec3689df39c65b2c238394e38470d8"}
                ]}
            >
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="author" content="Mukwevho Murendeni" />
            <meta name='description' content='Developer based in South Africa' />
            <meta name='google-site-verification' content='ojFr1wa1XQWEoRJft3h_XuYa6mGRSi1n6hML9up4xuc' />
            <meta name='keywords' content='Mukwevho Murendeni, Mukwevho, Murendeni, Fileboxer, Music Brackts, Web Developer, Inbound, MukwevhoM, iammurendeni' />
            <meta name="p=domain_verify" content="69ec3689df39c65b2c238394e38470d8" />
            <title>{site.siteMetadata.title}</title>
            <link rel="canonical" href="https://mukwevhom.xyz" />
            <script src="https://unpkg.com/feather-icons"></script>
        </Helmet>
    )
}

export default HeaderManager;
