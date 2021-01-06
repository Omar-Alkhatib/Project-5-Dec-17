const db = require("../../db");

const instructors_details = (req, res) => {
  const query = `SELECT * FROM users u JOIN roles r WHERE u.role_id = r.id AND r.type LIKE 'instructor'`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const instructor_details = (req, res) => {
  const query = `SELECT * FROM USERS WHERE ID = ?`;
  const data = req.params.id;
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
const update_user = (req, res) => {
  const query = `update users set name = ? , adress= ? ,email=? ,phone= ? ,password= ? where ID = ?`;

  const data = [
    req.body.name,
    req.body.address,
    req.body.email,
    req.body.phone,
    req.body.password,
    req.params.id,
  ];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAllCategories = (req, res) => {
  const query = "SELECT * FROM categories";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAllCourses = (req, res) => {
  const query = "SELECT * FROM courses";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAllLessons = (req, res) => {
  const query = "SELECT * FROM videos";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  instructors_details,
  instructor_details,
  update_user,
  getAllCategories,
  getAllCourses,
  getAllLessons,
};
