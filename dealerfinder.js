const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bing = require('./bing');

const app = express();
const port = 8080;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    
    let zip = '53081'; //req.query.zip;
    let result = await Promise.all(bing.findDealersForZipCode(zip,"")).then( (result)=> {
      console.log("result=" + result);
      res.send(result);
    });
    
    
    
    
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));