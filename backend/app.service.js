const morgan = require('morgan')
const api = require('./api')
const cookieParser = require('cookie-parser');
const express = require('express')
const path = require('path')
const session = require('express-session');
const passport = require('passport');
const bodyParser=require('body-parser')
const cors=require('cors')
const db=require('./db')
const setAuth = (app) => {
    app.use(cors({
        origin:'http://localhost:3000',
        credentials:true
    }))
    app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());


}
const setMiddleware = (app) => {
    
    app.use(cookieParser());
    require('dotenv').config();
    app.use(morgan('dev'))
    
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    //app.use(express.static(__dirname + '/public'));

}

const setApi = (app) => {
    app.use(api)
}
const setDB = () => {
    dbConnect=db.createConnection()
    db.checkDBStatus(dbConnect)
}

module.exports = {
    setAuth,
    setMiddleware,
    setApi,
    setDB
}