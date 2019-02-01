require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Filippo Rivolta, Web Design e frontend development`,
    description: `Filippo Rivolta, Ui / Ux design sviluppo frontend: soluzioni web moderne e coinvolgenti. Applicazioni, siti web e consulenza: 3347001377`,
    author: `Filippo Rivolta`,
    siteUrl: `https://www.filipporivolta.it`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/portfolio`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/filippo-rivolta-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "68.183.75.94",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          htaccess_user: "",
          htaccess_pass: "",
          htaccess_sendImmediately: false,
        },
        verboseOutput: true,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://68.183.75.94",
          replacementUrl: "http://68.183.75.94",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/*/*/categories",
          "**/*/*/posts",
          "**/*/*/pages",
          "**/*/*/media",
          "**/*/*/tags",
          "**/*/*/taxonomies",
          "**/*/*/users",
          "**/*/*/portfolio",
        ],
        excludedRoutes: ["**/*/*/posts/1456"],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133277122-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Filippo Rivolta`,
        short_name: `filipporivolta`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/filippo-rivolta-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.filipporivolta.it',
        sitemap: 'https://www.filipporivolta.it/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    //Starting internationalization
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'it',
        langs: ['it', 'en'],
        useLangKeyLayout: false
      }
    },
  ],
}
