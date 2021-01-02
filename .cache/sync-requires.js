const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/willmundy/Documents/Projects/RiceApps/rice-ventures/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/willmundy/Documents/Projects/RiceApps/rice-ventures/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/willmundy/Documents/Projects/RiceApps/rice-ventures/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/willmundy/Documents/Projects/RiceApps/rice-ventures/src/pages/index.js"))),
  "component---src-pages-join-js": hot(preferDefault(require("/Users/willmundy/Documents/Projects/RiceApps/rice-ventures/src/pages/join.js"))),
  "component---src-pages-meet-js": hot(preferDefault(require("/Users/willmundy/Documents/Projects/RiceApps/rice-ventures/src/pages/meet.js")))
}

