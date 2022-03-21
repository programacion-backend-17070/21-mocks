const router = require("express").Router()

router.get("/", (req, res) => res.send("OK"))
router.get("/:id", (req, res) => res.send("OK"))
router.post("/popular", (req, res) => res.send("OK"))
router.put("/", (req, res) => res.send("OK"))
router.delete("/", (req, res) => res.send("OK"))

module.exports = router