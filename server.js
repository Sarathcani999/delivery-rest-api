const express = require("express")
const app = express()
const chalk = require("chalk")
const { response } = require("express")

app.use("/auth" , require("./Routes/auth") )

const PORT = 8080
app.listen(PORT , () => {
    console.log( chalk.bold("SERVER STARTED AT PORT") , chalk.bold.greenBright(PORT))
})