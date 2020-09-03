const express = require(`express`)
const urllib = require(`urllib`)
const path = require(`path`)
const app = express()


app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))


app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})




const port = 3000
app.listen(port, function() {
    console.log(`The server is in port ${port}`)
})