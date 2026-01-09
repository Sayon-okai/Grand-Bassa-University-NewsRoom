import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

let port = 3000;

// Setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let post;

const newsPosts = `[{
    "author": "Sayon Okai",
    "id": "1",
    "post": "This is a test post"
}]`

post = JSON.parse(newsPosts)

app.get("/", (req, res) => {
    res.render("index.ejs", { data: post })
});

app.listen(port, () => {
   console.log(`server is running on port ${port}`); 
})