var https = require('https');
//const { search } = require('./app');
var BingMapsKey = "key";
var map = null;
var directionsX = 43.739793598651886;
var directionsY = 87.77999930083752;
var distance = 250;
var maxResults = 10;
var states = [];


exports.test = function(){
    console.log("hello\n");
    https.get('https://dev.virtualearth.net/REST/v1//Locations/?jsonp=jQuery1910014154174878003856_1598986177292&key=<key>d&o=json&query=53044&includeNeighborhood=1&include=queryParse&maxResults=10&_=1598986177293', (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {

          console.log(JSON.parse(data).explanation);
          return data;
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
   // var request = "https://dev.virtualearth.net/REST/v1//Locations/?jsonp=jQuery1910014154174878003856_1598986177292&key=<key>&o=json&query=53044&includeNeighborhood=1&include=queryParse&maxResults=10&_=1598986177293";
   // MakeServiceRequest(request);
}

exports.findDealersForZipCode = async function(zip, returnValues){

 

  // Get geolocation for the zip code
  let returnString = "";
  //let geocodeResults = "";
  //await Promise.all(geocodeResults = geocodeSearch(zip,returnValues));
  
  
    
  let response = await Promise.all(async (zip,returnValues) => {
    
     try{
       
     let geocodeResults = await geocodeSearch(zip,returnValues)
      let responseJson = await geocodeResults.json()

      console.log(responseJson)
      return responseJson;
    } catch (err) {
      console.log(err)
    }
  }
    
  
  )
      
  
  
 

  //returnString += geocodeResults;
  //returnString += "\n-----------------------------------------------------------\n";

 



 

}

const testFunc = () => {
    return new Promise(() => {
        resolve('Hiya');
    })
}

async function geocodeSearch(zip,returnValues){

 

  console.log('Return Values =' + returnValues);
  let options = {
    host: 'dev.virtualearth.net',
    path: '/REST/v1//Locations/?key='+BingMapsKey+'&o=json&query='+zip+'&includeNeighborhood=1&include=queryParse&maxResults='+maxResults+'&_=1598986177293',
    rejectUnauthorized: false,//add when working with https sites
    requestCert: false,//add when working with https sites
    agent: false,//add when working with https sites
  }
  
      let callback = (resp)=> {
      console.log('inside callback');
      let data = '';
      
      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
        console.log(data);
      });
    
      // The whole response has been received. 
      resp.on('end', () => {

 

        console.log(data);

 

        return data;
        
      });

 

      resp.on('error', function(e){
        console.log("Error: " + e);
        return "Error: " + e;
      });
  }

 

  https.request(options, callback ).end();
}