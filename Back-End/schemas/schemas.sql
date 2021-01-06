USE Grade_A;

CREATE Table roles (
  id int AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id),
  type varchar(255)
);

CREATE Table users (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255),
  credentials varchar(255),
  adress varchar(255),
  email varchar(255),
  password varchar(255),
  phone varchar(255),
  role_id int ,
  created_at timestamp,
  isDisabled  TINYINT DEFAULT 0,
  isLoggedIn TINYINT DEFAULT 0 ,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE Table categories (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255), 
  PRIMARY KEY (id)
);

CREATE Table courses (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255),
  price varchar(255),
  description varchar(255),
  instructor_id int,
  img_url varchar(255),
  created_at timestamp,
  category_id int,
  isDisabled TINYINT DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (instructor_id) REFERENCES users(id)
);

CREATE Table videos (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255),
  vide_url varchar(255),
  course_id int,
  created_at timestamp,  
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE Table rating (
  id int AUTO_INCREMENT NOT NULL,
  student_id int,
  course_id int,
  rating_value int,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE Table registration (
  id int AUTO_INCREMENT NOT NULL,
  student_id int,
  course_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE `message` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sender_id` int,
  `reciver_id` int,
  `content` varchar(255),
  `created_at` timestamp,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (reciver_id) REFERENCES users(id)
);

INSERT INTO roles (type)values('admin'),('instructor'),('student');
INSERT INTO users (name,credentials,adress,email,password,phone,role_id,created_at) values
('admin',null,'Bridgeport','admin@gmail.com','admin1234','504-621-8927',1,now())
,('instructor one','10 years experience CE','Anchorage','instructor1@gmail.com','instructorone1234','504-621-8937',2,now())
,('instructor two','Doctor of CS','Hamilton','instructor2@gmail.com','sad4as76d454','504-621-8947',2,now())
,('instructor three','Doctor of CIS','Ashland','instructor3@gmail.com','sad4as56d456','504-621-8957',2,now())
,('student one',null,'Chicago','student1@gmail.com','sad4as56d457','504-621-8967',3,now())
,('student two',null,'Baltimore','student2@gmail.com','sad4as56d458','810-292-9388',3,now())
,('student three',null,'Kulpsville','student3@gmail.com','sad4as56d460','856-636-8749',3,now())
,('student four',null,'Sioux Falls','student4@gmail.com','sad4as56d461','907-385-4412',3,now())
,('student five',null,'Los Angeles','student5@gmail.com','sad4as56d462','513-570-1893',3,now())
,('student six',null,'Chagrin Falls','student6@gmail.com','sad4as56d464','419-503-2484',3,now());
INSERT INTO categories (name) values('Web design'),('Web development'),('Networks'),('IT support'),('Android development'),('ios development');
INSERT INTO courses (name,price,description,instructor_id,created_at,category_id) values
('React.js',9.99,'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',2,now(),1),
('Angular.js',9.99,'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',2,now(),1),
('Node.js',9.99,'Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!',3,now(),2),
('PHP',9.99,'PHP for Beginners:learn everything you need to become a professional PHP developer with practical exercises & projects',3,now(),2),
('CCNA',9.99,'Learn about networking and start your journey to Cisco 200-301 Certification',4,now(),3),
('CCIE',9.99,'The top rated CCNA course online and only one where all questions get a response. Full lab exercises included',4,now(),3),
('CompTIA A+ ',9.99,'Course 1: Everything you need to pass the A+ Certification Core 1 (220-1001) Exam, from Mike Meyers and Total Seminars',2,now(),4),
('AWS Serverless',9.99,'Get into serverless computing with API Gateway, AWS Lambda and other Amazon Web Services! Zero server config APIs & SPAs',2,now(),4),
('The Complete Android N Developer Course',9.99,'Learn Android App Development with Android 7 Nougat by building real apps including Uber, Whatsapp and Instagram!',3,now(),5),
('Android Java Masterclass - Become an App Developer',9.99,'Improve your career options by learning Android app Development. Master Android Studio and build your first app today',3,now(),5),
('Swift 5',9.99,'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',4,now(),6),
('Flutter',9.99,'Officially created in collaboration with the Google Flutter team.',4,now(),6);

INSERT INTO rating (student_id,course_id,rating_value) values(5,1,4),(5,2,4.5),(5,3,4),(6,4,4.5),(6,5,4),(6,6,4.5),(7,7,4),(7,8,4.5),(7,9,4),(8,10,4.5),(8,11,4),(8,1,4.5),(9,2,4),(9,3,4),(9,4,4);
INSERT INTO registration (student_id,course_id) values(5,1),(5,2),(5,11),(6,3),(6,4),(6,12),(7,5),(7,10),(8,6),(8,7),(9,8),(9,9); 

