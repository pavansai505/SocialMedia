const express=require('express')
const services=require('./app.service')
require('./auth')
const app=express()
services.setAuth(app)
services.setMiddleware(app)
services.setApi(app)
services.setDB()

module.exports=app