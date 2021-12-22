const Todo = require("../models/todo");

const router = require("express").Router()


//routes
router.post("/add/todo", (req,res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});


    //saving todo
    newTodo
    .save()
        .then(() => {
            console.log("Successfully added task!");
            res.redirect("/");

        })
        .catch((err) => console.log(err));
    
})


 .get("/delete/todo/:_id", (req,res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
    .then(() => {
        console.log("Task deleted successfully!");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
