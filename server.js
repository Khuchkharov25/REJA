const http = require('http');
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://khuchkharov25:Doston5225@cluster0.ouseqew.mongodb.net/Reaj";

mongodb.connect(connectionString, {
    useNewUrlParser: true, useUnifiedTopology: true,
}, (err, client) => {
   if(err) console.log("ERROR on connection MongoDB");
   else{
    console.log("MongoDB connection succeed");
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function(){
        console.log(`The server is running succesfully on ports: ${PORT}, http://localhost:${PORT}`);
    });
   }
});
