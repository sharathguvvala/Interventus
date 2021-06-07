const express = require('express')
const app = express()
const port = process.env.port || 8000

//use routes
app.use("/", require('./routes/index'))

//setup view engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`)
    }
    console.log(`Server is up and running on port ${port}`)
})