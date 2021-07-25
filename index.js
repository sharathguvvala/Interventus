const express = require('express')
const app = express()
const port = process.env.port || 8000
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const passportLocal = require('./config/passport-local')
/* const MongoStore = require('connect-mongo') */
const sassMiddleware = require('node-sass-middleware')

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}))

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setup view engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(session({
    name:'interventus',
    secret:'sharath',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(6*100*100) //in milliseconds
    }/* ,
    store:MongoStore.create({
        mongoUrl:db,
        autoRemove:'disabled'
    }) */
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthUser)

//use routes
app.use("/", require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`)
    }
    console.log(`Server is up and running on port ${port}`)
})