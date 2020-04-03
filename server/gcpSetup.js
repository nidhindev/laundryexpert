var fs = require('fs');
const properties = {
    gcpData: process.env.GCP_DATA || JSON.stringify({
        
    }),
    gcpFile: process.env.GCP_KEY_FILE || './src/google-sheet/gcpconfig.json'
};
fs.writeFile(properties.gcpFile, properties.gcpData, (err) => { console.log(err)});