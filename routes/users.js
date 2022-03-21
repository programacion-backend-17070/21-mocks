const router = require("express").Router()
const faker = require("faker")

const users = []

router.get("/", (req, res) => res.send(users))
router.get("/:id", (req, res) => {
  const { id } = req.params
  const mock = users.find(m => m.id == id)

  if(!mock) {
    return res.status(404).send("no existe")
  }

  res.send(mock)
})
router.post("/popular", (req, res) => {
  const { cant } = req.query

  let id = 1
  if (users.length) {
    id = users[users.length - 1].id
  }
  const limite = cant || 50
  for (let i = 0; i <= limite; i++) {
    id = id + 1
    users.push({
      nombre: faker.name.findName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      avatar: faker.internet.avatar(),
      id
    })
  }

  res.send("OK")
})

router.post("/", (req, res) => {
  const { body } = req
  let id = 1
  if (users.length) {
    id = users[users.length - 1].id + 1
  }

  users.push({
    ...body,
    id
  })

  res.send("OK")
})

router.put("/:id", (req, res) => {
  const { id } = req.params
  const index = users.findIndex(m => m.id == id)

  if(index === -1) {
    return res.status(404).send("no existe")
  }

  const mock = users[index]
  const { body } = req

  users.splice(index, 1, { ...mock, ...body })

  res.send("OK")

})
router.delete("/:id", (req, res) => {
  const { id } = req.params
  const index = users.findIndex(m => m.id == id)

  if(index === -1) {
    return res.status(404).send("no existe")
  }

  users.splice(index, 1)

  res.send("OK")
})

module.exports = router