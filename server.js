const express = require("express")
const app = express()
const chalk = require("chalk")
const { response } = require("express")

app.use("/shop" , require("./Routes/Shop/shop") )
app.use("/delivery" , require("./Routes/Delivery/delivery") )
app.use("/user" , require("./Routes/User/user") )

const PORT = 8080
app.listen(PORT , () => {
    console.log( chalk.bold("SERVER STARTED AT PORT") , chalk.bold.greenBright(PORT))
})