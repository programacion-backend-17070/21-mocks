const express = require("express")
const usersRoute = require("./routes/users")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", usersRoute)

app.listen(PORT, () => console.log("🚀 server started"))





