const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    titleTemplate: "%s . Tigers Lounge",
    description: `Tiger has an opinion on his pet food and pet accessories, you should listen `,
    keywords: "Pet food, cat food, cat toys",
    image: "/src/assets/images/img/website-icon.png",
    url: "http://blog.tigerslounge.com",
    twitterUsername: "@tigerslounge",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },{
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://matrixblend.us7.list-manage.com/subscribe/post?u=b44d90c3fc2c65dc71a43e11a&amp;id=f106a2d907", // add your MC list endpoint here; see instructions below
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
