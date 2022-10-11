const express = require("express");
const app = express();
const cors = require('cors');
const postRoute = require('./routes/posts')
const multer = require('multer');
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/photos", express.static(path.join(__dirname, "/photos")))

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"photos");
    },
    filename: (req,file,cb) => {
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})

app.use('/api/post', postRoute);

app.listen("8000", () => {
    console.log("Backend running on port 8000");
});