const db = require('../db')
const express = require("express");
const app = express();
const {check, validationResult } = require("express-validator");


// Create a new post
app.post("/", [check('title','Post title is required').not().isEmpty()
] ,(req, res) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const title = req.body.title;
        const des = req.body.des;
        const img = req.body.img; 
        const name = req.body.name;
        db.query('INSERT INTO posts (title, des, img, name) VALUES (?,?,?,?)', [title, des, img, name]
        );
      res.json({
        message: "Success!"
      })
   
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
      res.status(201)
      res.json({
        message: "Updated!"
      })
    } catch (err) {
        console.error(err.message);
    }
});


app.delete('/:id', (req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM posts WHERE id = ?", id, (err,result) => {
        if(err) {
            console.log(err)
        } else{
            res.status(204)
            res.send(result)
        }
    })
})

   

module.exports = app;