const express = require("express")
const router = express.Router()
const {getPosts , createPost , updatePost , deletePost} = require("../controllers/post.js")

router.get("/getPosts" , getPosts)
router.post("/createPost" , createPost)
router.patch("/updatePost/:id" , updatePost)
router.delete("/deletePost/:id" , deletePost)





module.exports = router