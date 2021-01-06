const instructorsRouter = require("express").Router();
const multer = require("multer");
const fs = require("fs-extra");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = "public/video";
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");
const uploadVideo = multer({ storage: storageVideo }).single("file");

const {
  registeredCoursesInstructor,
  visiblityCourse,
  addCourse,
  addLesson,
  updateCourse,
  courseRating,
} = require("../controllers/main-controller");

const {
  instructor_details,
  update_user,
  getAllCategories,
  getAllCourses,
  getAllLessons,
} = require("../controllers/admin_controllers/instructors_controllers");

// Show a hidden course
instructorsRouter.put("/visiblity/:id", visiblityCourse);

// Add courses
instructorsRouter.post("/course/", addCourse);

// Add courses
instructorsRouter.post("/lesson/", addLesson);

// Update courses
instructorsRouter.put("/course:id/:i", updateCourse); // id = courses.id , i = courses.price

// View all courses
// instructorsRouter.get('/courses/',courses)

// View total number of courses registered
instructorsRouter.get("/registeredCourses/:id", registeredCoursesInstructor);

// View course rating
instructorsRouter.get("/course_rating/:id", courseRating); // id = courses.id

// Add live videos
// instructorsRouter.get('/',)

// Chat with students
// instructorsRouter.get('/',)

// // View all instructor account details
instructorsRouter.get("/instructor_details/:id", instructor_details);

instructorsRouter.get("/courses/", getAllCourses);

instructorsRouter.get("/lessons/", getAllLessons);

instructorsRouter.put("/update_instructor/:id", update_user);

instructorsRouter.get("/categories", getAllCategories);

instructorsRouter.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

instructorsRouter.post("/uploadVideo", function (req, res) {
  uploadVideo(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = instructorsRouter;
