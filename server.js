const http = require('http'),
    express = require('express'),
    cookieRouter = require('./routers/handleData.router');

process.on('uncaughtException', (error) => {
    console.log(`The error occurre due to ${error}`);
});

const app = express(),
    expressServer = http.createServer(app);

app.use('/', cookieRouter);
expressServer.listen(2504, () => {
    console.log(`Express app is listening on 2504`);
});