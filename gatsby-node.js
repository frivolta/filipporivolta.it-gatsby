const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const {
  createFilePath
} = require('gatsby-source-filesystem')
const {
  fmImagesToRelative
} = require('gatsby-remark-relative-images')

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return new Promise((resolve, reject) => {
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
        `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
          }
        }
      `
      )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {

          /* createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          }) */
        })
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    format
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/blog/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })
          resolve()
        })
      })
      .then(() => {
        graphql(
          `{
            allWordpressAcfPortfolio {
              edges {
                node {
                  id
                  acf {
                    slug
                    language
                  }
                }
              }
            }
          }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const portfolioTemplate = path.resolve("./src/templates/portfolio.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressAcfPortfolio.edges, edge => {
            if (edge.node.acf.language === "it") {
              createPage({
                path: `portfolio/${edge.node.acf.slug}/`,
                component: slash(portfolioTemplate),
                context: {
                  id: edge.node.id,
                  slug: edge.node.acf.slug,
                  locale: "it",
                },
              })
            } else {
              createPage({
                path: `en/portfolio/${edge.node.acf.slug}/`,
                component: slash(portfolioTemplate),
                context: {
                  id: edge.node.id,
                  slug: edge.node.acf.slug,
                  locale: "en",
                },
              })
            }
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })


}