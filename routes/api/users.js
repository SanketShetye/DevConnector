const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@desc Tests user route
//@acccess PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
