const http = require("http"), 
axios = require("axios"); 
 
//create a server object: 
http.createServer((req, res) => { 
    res.write(users.join(", ")); //display the list of users on the page 
    res.write("\n\n"+email.join(", "));
    res.end(); //end the response 
}).listen(8000); 
 
let users = []; 
let email=[];
 
(async function getNames() { 
  try { 
    const { data } = await axios.get( 
      "https://jsonplaceholder.typicode.com/users" ); 
       users = data.map(user => user.name); 
       email = data.map(email => email.email)
  } catch (error) { 
    console.log(error); 
  }
})()
