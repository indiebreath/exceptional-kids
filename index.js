const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/source/pages"));
app.use("/styles", express.static(__dirname + "/source/styles"));
app.use("/images", express.static(__dirname + "/source/images"));

app.get("/", (req, res) => {
    res.type("text/plain");
    res.status(200);
    res.render(__dirname + "/source/pages/index.html");
});

app.get("/about", (req, res) => {
    res.type("text/plain");
    res.status(200);
    res.render(__dirname + "/source/pages/about.html");
});

app.get("/services", (req, res) => {
    res.type("text/plain");
    res.status(200);
    res.render(__dirname + "/source/pages/services.html");
});

app.listen(port, () => {
    console.log("Application running and listening on port 3000.");
});
