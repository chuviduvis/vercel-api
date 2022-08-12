const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const bodyparser = require('body-parser')

app.use(cors())
app.use(bodyparser.json())


app.post('/', (req, res) => {
    // console.log(req.body)
  
    const options = {
        method: 'POST',
        body:`{ "ingredients":[ "1 apple" ] }`
    };
    fetch(`https://api.spoonacular.com/food/ingredients/glycemicLoad?apiKey=${process.env.API_KEY}`, options)
        .then(response => response.json())
        .then (response => res.json(response))
        .catch(err => console.error(err,));
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

    // res.json('Hey this is my API running 🥳')
  })




  app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
  })

    
module.exports = app

  