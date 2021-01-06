const db = require('../../db');

const addCategory = (req, res) => {
    const {name}=req.body
    const query = `INSERT INTO categories (name) values (?)`;
    const data = name;
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

module.exports = {
    addCategory
};


