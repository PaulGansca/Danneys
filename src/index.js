const express = require("express");
const pug = require("pug");

const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
