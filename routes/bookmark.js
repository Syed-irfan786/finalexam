const router = require("express").Router();
const Bookmark = require("../models/Bookmark");

// routes
router
  .post("/add/bookmark", (req, res) => {
    const { bookmark, link } = req.body;
    const newTodo = new Bookmark({ bookmark, link });

    // save the bookmark
    newTodo
      .save()
      .then(() => {
        console.log("Successfully added bookmark!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/bookmark/:_id", (req, res) => {
    const { _id } = req.params;
    Bookmark.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Bookmark Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get('/search/bookmark',async(req,res)=>{
    const n = req.params.name;
    try{
        const myRoute = await My.findById(req.params.id)
        res.json(myRoute)
    }
    catch(err){
        res.send('Error '+err)
    }
    
})

  .patch("/edit/bookmark/:_id",async (req, res) => {
    try{
      const myRoute = await My.findById(req.params._id)
      myRoute.name =req.body.namee
      const my1 = await myRoute.save()
      res.json(my1)
  }
  catch(err){
      res.send("Error!!! "+ err)
  }
  })

module.exports = router;