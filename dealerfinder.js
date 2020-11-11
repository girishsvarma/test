const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bing = require('./bing');

const app = express();
const port = 8080;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:zip', async (req, res) => {
    
    let zip = req.params.zip;
    let result = await Promise.all([bing.findDealersForZipCode(zip,"",res)]);
    
    
    
    
});

app.listen(port, () => console.log(`Use Url http://localhost:${port}/<<zipcode>> to access!`));
