const router = require("express").Router()

// Method POST
// route /createUser
// response user details and token
router.post("/createUser" , (request , response) => {
    response.send("Create User")
})

// Method POST
// route /createShop
// response shop details and token
router.post("/createShop" , (request , response) => {
    response.send("Create Shop")
})

// Method POST
// route /createDelivery
// response delivery boy details and token
router.post("/createDelivery" , (req , res ) => {
    res.send("Create Delivery")
})

module.exports = router