const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, '../lang'),
  defaultLocale: 'en',
  queryParameter: 'lang',
  register: global,
  autoReload: true,
  updateFiles: false
});

module.exports = i18n;
