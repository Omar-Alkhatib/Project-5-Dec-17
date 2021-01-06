const db = require('../../db');

const courseRating = (req, res) => {
    const query = `SELECT * FROM courses JOIN rating ON rating.course_id=? AND courses.id=?`;
    const data = [req.params.id,req.params.id];
    db.query(query, data, (err, result) => {
        const avgRating= result.reduce((acc, e) => acc + e.rating_value,0)/result.length;
        if (err) throw err;
        res.json(avgRating);
    })
};

module.exports = {
    courseRating
};


