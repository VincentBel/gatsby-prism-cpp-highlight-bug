const config = {
  title: "Vincent Bel's Blog",
  // titleAlt: "", // Alternate site title
  // description: '',
  author: 'Vincent Bel',
  url: 'https://vincentbel.com', // Don't add trailing slash
  // pathPrefix: '/blog', // Don't add trailing slash
  // logo: '',

  disqusShortname: 'vincentbel',
  googleAnalyticsTrackingId: 'UA-105081327-1',
  twitter: '_vincent_bel',
  // fbAppID: '',
}

config.baseURL = `${config.url}${config.pathPrefix ? config.pathPrefix : ''}`

module.exports = config
