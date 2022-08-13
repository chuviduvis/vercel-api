const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

const apple = express.Router();
const pear = express.Router();
const coke = express.Router();
const snickers = express.Router();
const watermelon = express.Router();
const banana = express.Router();
const orangejuice = express.Router();
const strawberry = express.Router();
const almonds = express.Router();
const tortilla = express.Router();
const bread = express.Router();
const carrots = express.Router();
const broccoli = express.Router();
const vanillaicecream = express.Router();
const mango = express.Router();
const grapes = express.Router();

apple.get('/apple', function (req, res, next) {
  const response = {
    status: 'success',
    totalGlycemicLoad: 6.64,
    ingredients: [
      {
        original: '1 apple',
        glycemicIndex: 32,
        glycemicLoad: 6.64
      }
    ]
  }
  res.json(response)
});

pear.get('/pear', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 7.92,
        ingredients: [
          {
            id: 9252,
            original: '1 pear',
            glycemicIndex: 36.75,
            glycemicLoad: 7.92
          }
        ]
      }
    res.json(response)
  });

coke.get('/coke', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 14.21,
        ingredients: [
          {
            id: 14400,
            original: '1 glass of coke',
            glycemicIndex: 63,
            glycemicLoad: 14.21
          }
        ]
      }
    res.json(response)
  });

snickers.get('/snickers', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 18.56,
        ingredients: [
          {
            id: 19155,
            original: '1 bar of snickers',
            glycemicIndex: 55,
            glycemicLoad: 18.56
          }
        ]
      }
    res.json(response)
  });

watermelon.get('/watermelon', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 8.11,
        ingredients: [
          {
            id: 9326,
            original: '1 cup of watermelon',
            glycemicIndex: 74.67,
            glycemicLoad: 8.11
          }
        ]
      }
    res.json(response)
  });

banana.get('/banana', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 13.06,
        ingredients: [
            {
            id: 9040,
            original: '1 banana',
            glycemicIndex: 54.78,
            glycemicLoad: 13.06
        }
        ]
    }
    res.json(response)
});
orangejuice.get('/orangejuice', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 12.52,
        ingredients: [
        {
            id: 9206,
            original: '1 glass of orange juice',
            glycemicIndex: 52,
            glycemicLoad: 12.52
        }
        ]
    }
    res.json(response)
});

strawberry.get('/strawberry', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 3.27,
        ingredients: [
        {
            id: 9316,
            original: '1 cup of strawberry',
            glycemicIndex: 40,
            glycemicLoad: 3.27
        }
        ]
    }
    res.json(response)
});

almonds.get('/almonds', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 1.3,
        ingredients: [
          {
            id: 12061,
            original: '1 cup of almonds',
            glycemicIndex: 10,
            glycemicLoad: 1.3
          }
        ]
      }
    res.json(response)
});

tortilla.get('/tortilla', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 4.68,
        ingredients: [
        {
            id: 18364,
            original: '1 tortilla',
            glycemicIndex: 34,
            glycemicLoad: 4.68
        }
        ]
    }
    res.json(response)
});

bread.get('/bread', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 7.15,
        ingredients: [
        {
            id: 18064,
            original: '1 slice of bread',
            glycemicIndex: 58.67,
            glycemicLoad: 7.15
        }
        ]
    }
    res.json(response)
});

carrots.get('/carrots', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 4.06,
        ingredients: [
        {
            id: 11124,
            original: '1 cup of carrots',
            glycemicIndex: 46.83,
            glycemicLoad: 4.06
        }
        ]
    }
    res.json(response)
});

broccoli.get('/broccoli', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 1.18,
        ingredients: [
          {
            id: 11090,
            original: '1 cup of broccoli',
            glycemicIndex: 32,
            glycemicLoad: 1.18
          }
        ]
    }
    res.json(response)
});

vanillaicecream.get('/vanillaicecream', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 18.44,
        ingredients: [
          {
            id: 19095,
            original: '1 cup of vanilla ice cream',
            glycemicIndex: 61,
            glycemicLoad: 18.44
          }
        ]
    }
    res.json(response)
});

mango.get('/mango', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 11.44,
        ingredients: [
        {
            id: 9176,
            original: '1 cup of mango',
            glycemicIndex: 51.75,
            glycemicLoad: 11.44
        }
        ]
    }
    res.json(response)
});

grapes.get('/grapes', function (req, res, next) {
    const response ={
        status: 'success',
        totalGlycemicLoad: 11.95,
        ingredients: [
        {
            id: 9132,
            original: '1 cup of grapes',
            glycemicIndex: 46,
            glycemicLoad: 11.95
        }
        ]
    }
    res.json(response)
});


    

    
app.use(apple)
app.use(pear)
app.use(coke)
app.use(snickers)
app.use(watermelon)
app.use(banana)
app.use(orangejuice)
app.use(strawberry)
app.use(almonds)
app.use(tortilla)
app.use(bread)
app.use(carrots)
app.use(broccoli)
app.use(vanillaicecream)
app.use(mango)
app.use(grapes)


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
  })

    
module.exports = app

  