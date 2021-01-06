const db = require('../../db');

const getRating = (req, res) => {
    const query = `SELECT * FROM rating WHERE rating_value = ?`;
    const data = req.params.id;
    db.query(query,data, (err, result) => {
        if (err) throw err
        res.json(result)
    })
};

const evaluate = (req, res) => {
    const query = `INSERT INTO rating (student_id, course_id, rating_value) VALUES (?, ?, ?)`;
    const data = [req.params.s,req.params.c,req.params.r];
    db.query(query,data, (err, result) => {
        if (err) throw err
        res.send("evaluate_s called")
        // res.json(result)
    })
};

module.exports = {
    getRating,
    evaluate
};



