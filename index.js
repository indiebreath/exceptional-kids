const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use("/", express.static(__dirname + "/source/pages"));
app.use("/styles", express.static(__dirname + "/source/styles"));
app.use("/images", express.static(__dirname + "/source/images"));

app.get("/", (req, res) => {
    res.type("text/plain");
    res.status(200);

    fs.readFile(__dirname + "/source/pages/index.html", function(err, data) {
        res.send(data);
    })
});


app.listen(port, () => {
    console.log("Application running and listening on port 3000.");
});
