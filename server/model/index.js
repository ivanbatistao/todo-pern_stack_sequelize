var Sequelize = require("sequelize")
const S = Sequelize
var db = new Sequelize(
  "postgres://ivanbatistao:password@localhost:5432/perntodosequelize",
  {
    logging: false,
  }
)

const Todo = db.define("todo", {
  description: {
    type: S.TEXT,
    allowNull: false,
  },
})

Todo.sync()

module.exports = Todo
