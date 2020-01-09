const toTailwind = require('@theme-ui/tailwind');
const theme = require('./theme/'); // Path to Theme UI config
module.exports = toTailwind(theme);
