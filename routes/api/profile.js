const express = require("express");
const router = express.Router();

//@route GET api/profile/test
//@desc Tests profile route
//@acccess PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
