const express = require('express')

const getProducts = require('./getProducts')

const getProduct = require('./getProduct')

const app = express()

const port = 4411

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

app.listen(4411, () => {
    console.log('Server running on port 4411')
})

