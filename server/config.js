const dotenv = require('dotenv');
module.exports = {
  port: process.env.PORT,
  creds: process.env.CREDS,
  spreadsheetId: process.env.GOOGLE_SHEET_ID
};