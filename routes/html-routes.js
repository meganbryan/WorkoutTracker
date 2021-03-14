const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "html/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(dirname, "html/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "html/stats.html"));
});

module.exports = router;