const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({
    extended: false
}));
app.use(body_parser.json());
app.use(express.static('dist'));
module.exports = {
    express: express,
    app: app,
    http: http,
    PORT: process.env.PORT || config.get('port') || 8080
};
const healthCheck = require('./src/healthcheck/controller');


app.use('/infra/healthcheck', healthCheck);
app.use('/**', express.static('dist'));

http.listen(PORT, () => {
    console.log('server is running on port', PORT);
});
