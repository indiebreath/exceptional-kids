const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

app.use("/", express.static(__dirname + "/src/pages"));
app.use("/styles", express.static(__dirname + "/src/styles"));
app.use("/images", express.static(__dirname + "/src/images"));

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(__dirname + "/src/pages/index.html");
});

router.get("/about", function(req, res) {
    res.sendFile(__dirname + "/src/pages/about.html");
});

router.get("/services", function(req, res) {
    res.sendFile(__dirname + "/src/pages/services.html");
});

app.use("/", router);

app.listen(port, () => {
    console.log("Application running and listening on port 3000.");
});
