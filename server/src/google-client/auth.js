const auth = require("../cache/appCache");
const { JWT } = require("./google-auth-library");
const { creds } = require("../../config");
function setUpGoogleAuth() {
    var keys = JSON.parse(creds);
    if (!keys) {
        throw new Error('The $CREDS environment variable was not found!');
    } else {
        console.log('calling google auth')
        var client = new JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );
        auth.gcpChache.set('gcpClient', client);
    }
}

exports.setUpGoogleAuth = setUpGoogleAuth;