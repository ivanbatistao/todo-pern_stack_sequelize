const express = require("express")
const app = express()
const cors = require("cors")
const Todo = require("./model/index")

//middleware
app.use(cors())
app.use(express.json())

//ROUTES

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await Todo.create({
      description,
    })
    res.json(newTodo)
  } catch (error) {
    console.error(error.message)
  }
})
// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await Todo.findAll()
    res.json(allTodos)
  } catch (error) {
    console.error(error.message)
  }
})

// // get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todo.findByPk(id)
    res.json(todo)
  } catch (error) {
    console.error(error.message)
  }
})

// // update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    await Todo.update(
      {
        description: description,
      },
      {
        where: {id},
      }
    )
    res.json("Todo was updated")
  } catch (error) {
    console.error(error.message)
  }
})

// // delete a todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params
        await Todo.destroy({
          where: {
            id
          }
        })
        res.json("Todo was deleted")
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>")
})

app.listen(5001, () => {
  console.log("Server has started on port 5001")
})
