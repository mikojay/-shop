// Config

const express = require('express')
const path = require('path')
const app = express()

// Database
const db = require('./db')
// Static Files

// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})

app.get('/api/color', require ('./controllers/color.js'))

app.get('/api/products', require ('./controllers/products_get.js'))

app.get('/api/products/:id', require ('./controllers/productsx_get.js'))

app.get('/api/categories', require ('./controllers/categories_get.js'))
// Run Server

app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
