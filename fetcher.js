const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
let content = '';
let name = args[1];
let stats = fs.statSync(name);
let fileSizeInBytes = stats["size"];

request(`${args[0]}`, (error, response, body) => {

  content += body;// Print the HTML for the Google homepage.
  
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }

  fs.writeFile(name, content, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('statusCode:', response && response.statusCode);
    console.log(`The file has been saved! Size: ${fileSizeInBytes} bytes! to ${name}`);
  });

});
