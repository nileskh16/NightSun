const express = require('express'),
handleRouter = module.exports = express.Router(),
respHtml = `
    <html>
        <h2>We are so happy to break into it with anonymous</h2>
    </html>
`;

handleRouter.get('/', (req, res) => {
    res.status(200).send(respHtml);
});

handleRouter.post('/', (req, res) => {

});