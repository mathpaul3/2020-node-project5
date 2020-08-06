const { Router } = require("express");
const router = Router();

router.use("/music", require("./music")); // index는 안써도 알아서 찾음
router.use("/movie", require("./movie"));

module.exports = router;
