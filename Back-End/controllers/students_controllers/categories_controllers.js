const db = require('../../db');

const getAllCategories = (req, res) => {
	const query = 'SELECT * FROM categories';
	db.query(query, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const getCategoryCourses = (req, res) => {
	const query = `SELECT * FROM courses WHERE category_id = ?`;
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	getAllCategories,
	getCategoryCourses,
};
