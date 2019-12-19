const path = require('path')

module.exports = {
  siteTitle: 'Harta Serviciilor Sociale din România',
  siteTitleShort: 'HSSR',
  siteDescription: 'Îngrijim și suntem îngrijiți mai bine',
  siteUrl: 'http://localhost:8000',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/assets/images/harta-icon.png'),
  social: {
    twitter: 'cezarneaga',
    fbAppId: '123',
  },
}
