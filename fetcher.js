
/* Takes 2 command line arguments
- a URL
- a local file path
- It should download the resource at the URL to the local path on your machine.
- Upon completion, it should print out a message like "Downloaded and saved 1235 bytes to ./index.html"
- */

const request = require('request');
const fs = require('node:fs');

// Parse command line arguments using process.argv
const url = process.argv[2];
const filePath = process.argv[3];

//Using the request library make an HTTP request asynchronously
request(url, (error, response, body) => {
  if (error) {
    console.error('Error: ', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status: ', response.statusCode);
  } else {
    // Success
  }
});



