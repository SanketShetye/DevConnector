const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@desc Tests post route
//@acccess PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
