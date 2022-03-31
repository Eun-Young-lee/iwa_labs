const http = require("http"), 
axios = require("axios"); 
 
//create a server object: 
http.createServer((req, res) => { 
    res.write(users.join(", ")); //display the list of users on the page 
    res.end(); //end the response 
}).listen(8000); //the server object listens on port 8080 
 
let users = []; 
 
(async function getNames() { 
  try { 
    const { data } = await axios.get( 
      "https://jsonplaceholder.typicode.com/users" ); 
       users = data.map(user => user.name); 
  } catch (error) { 
    console.log(error); 
  }
})()
