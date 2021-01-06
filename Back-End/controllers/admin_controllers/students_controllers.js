const db = require('../../db');

const students_details = (req, res) => {
	const query = `SELECT * FROM users u JOIN roles r WHERE u.role_id = r.id AND r.type LIKE 'student'`;

	db.query(query, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const disable_user = (req, res) => {
	const {name}=req.body
	const query = `UPDATE users SET isDisabled = 1 WHERE name = ?`;
	const data = name;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	students_details,
	disable_user,
};
