const express = require(`express`)
const urllib = require(`urllib`)
const path = require(`path`)
const app = express()


app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))



app.get(`/recipes/:input`, function(request, res) {
    const input = request.params.input
       urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${input}`, function(err, response){
           
           const data =  JSON.parse(response.toString()).results
           console.log(data)
           const results = data
           .map(Recipe => {return {
                  ingredients: Recipe.ingredients,
                  title: Recipe.title,
                  thumbnail: Recipe.thumbnail,
                  href: Recipe.href
            }
            })
           
               res.send(results)    
    })
})    




const port = 8080
app.listen(port, function() {
    console.log(`The server is in port ${port}`)
})
