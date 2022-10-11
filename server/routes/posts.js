const db = require('../db')
const express = require("express");
const app = express();


// Create a new post
app.post("/", (req, res) =>{
    try {
        const title = req.body.title;
        const des = req.body.des;
        const img = req.body.img; 
        const name = req.body.name;
        db.query('INSERT INTO posts (title, des, img, name) VALUES (?,?,?,?)', [title, des, img, name]
        );
      res.send("Values Inserted")
    } catch (err) {
        console.error(err.message);
    }
});
 

// Get all posts
app.get('/',(req,res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    });
}); 

// Get a post by ID
app.get('/:id',(req,res) => {
    const id = req.params.id
    db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    });
}); 
 
// Edit a post by ID
app.put('/:id', (req, res) => {
    try {
        const title  = req.body.title;
        const des  = req.body.des;
        const name  = req.body.name;
        const id = req.params.id;
        db.query('UPDATE posts SET title = ?, des = ?, name = ? WHERE id = ?',[title, des, name, id]
        );
      res.send("Updated!")
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a post by ID 
app.delete('/:id', (req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM posts WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else{
            res.send(result)
        }
    });
});
   

module.exports = app;