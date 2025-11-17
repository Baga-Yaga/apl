const express = require("express");
const router = express.Router();

// Simple routes using router
router.get("/home", (req, res) => {
    res.send("This is the HOME route from Router");
});

router.get("/about", (req, res) => {
    res.send("This is the ABOUT route from Router");
});

module.exports = router;
