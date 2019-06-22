// Config

const express = require('express')
const path = require('path')
const app = express()

// API

app.get('/api/products', require('./controllers/products_get'))
app.get('/api/products/:category', require('./controllers/products_get'))
app.get('/api/categories', require('./controllers/categories_get'))
app.get('/api/colors', require('./controllers/colors_get'))

// Static Files

// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})

// Run Server

app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
