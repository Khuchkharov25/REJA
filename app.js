console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();


//MongoDB connect chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1.  Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2. Session code

// 3.  Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Rooting code

// app.get("/Hello", function(req, res){
//       res.end(`<h1 style="background: red">HELLO WORLD by Dostonbek</h1>`);
// });

// app.get("/gift", function(req, res){
//     res.end(`<h1 style="background: blue">Siz sovgalar bolimidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
       res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
    res.json({state: "success"});
  })
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, function(err, data) {
        res.json({state: "success"});
    });
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function(){
            res.json({state: "Hamma Rejalar Ochirildi!"});
        })
    }
})

app.get("/", function(req, res){
    console.log("user entered / ");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something Went Wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;
