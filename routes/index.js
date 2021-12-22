 const router = require("express").Router()
 const Todo = require("../models/todo");

//routes will be here
router.get("/", async(req, res) => {
        const allTodo = await Todo.find();
        
        res.render("index.ejs", { todo: allTodo })
    })



 module.exports = router;
