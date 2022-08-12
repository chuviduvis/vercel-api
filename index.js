const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const bodyparser = require('body-parser')

app.use(cors())
app.use(bodyparser.json())


app.get('/', (req, res) => {
    // console.log(req.body)
  
 
    if(process.env.API_KEY === "07016277fd154dbda347300bfef8048d"){
      objeto = {
        noapikey: true
      }
      res.json(objeto)
    }
    res.json('Hey this is my API running 🥳')
    // const options = {
    //     method: 'POST',
    //     body:`{ "ingredients":[ "1 apple" ] }`
    // };
    // fetch(`https://api.spoonacular.com/food/ingredients/glycemicLoad?apiKey=${process.env.API_KEY}`, options)
    //     .then(response => response.json())
    //     .then (response => res.json(response))
    //     .catch(err => {
    //         res.json(err)
    //         console.error(err, "2")});
    // const response = {
    //     status: 'success',
    //     totalGlycemicLoad: 6.64,
    //     ingredients: [
    //       {
    //         original: '1 apple',
    //         glycemicIndex: 32,
    //         glycemicLoad: 6.64
    //       }
    //     ]
    //   }
    //   res.json(response)

    // 
  })




  app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
  })

    
module.exports = app

  