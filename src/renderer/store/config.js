/*
    Defines the API route we are using.
*/
import axios from 'axios'
var site_axios = axios.create({
    headers: { 'Content-Type': 'application/json'},
    timeout: 3000,
    keepAlive: true
    
})

var api_endpoint = ''
switch( process.env.NODE_ENV ){
  case 'development':
      // Please add your api endpoint here
      api_endpoint = "http://localhost:3000/api/" 
  break;
  case 'production':
      api_endpoint = "http://yourdomain.com/api/" 
  break;
}
export const SITE_API_CONFIG = {
  API_CONFIG : site_axios,
  API_ENDPOINT: api_endpoint
}


