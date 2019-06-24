const db = require('../db')

module.exports=(req, res) => {
	db.query(`SELECT DISTINCT color FROM products`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
