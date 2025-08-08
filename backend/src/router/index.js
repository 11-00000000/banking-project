const express = require("express")
const router= express.Router()
const routes =[]

routes.forEach((cur)=>{
    router.use(cur.path,cur.route)
})
module.exports = router