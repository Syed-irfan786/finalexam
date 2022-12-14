const router = require("express").Router()
const Bookmark = require("../models/Bookmark");

// routes will be here....
router.get("/", async(req, res) => {
    const allTodo = await Bookmark.find();
    res.render("index", {bookmark: allTodo})
})


module.exports = router;