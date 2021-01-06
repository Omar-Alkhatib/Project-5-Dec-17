const connection = require('../../db');
const bcrypt = require('bcrypt');

const  register =(req,res)=>{
const{name,adress,email,password,phone,confPassword} =req.body
  let role_id =0

    //setting the role for the registered account
    if(req.params.role === "instructor"){
        role_id = 2
     }else if(req.params.role === "student"){
        role_id = 3
     };
     if(password!==confPassword){
       return res.json("Passwords don't match..")
     }

      //Checking if there is  same data in database with the request data
    const query = `SELECT * FROM users WHERE email ='${email}' OR  name = '${name}' `;
    connection.query(query,(err,result)=>{
       if(err) throw err;
       if(result.length){
            if(result[0].email === email){
             return res.json("Email is used..")
            };
            if(result[0].name === name){
             return res.json("User name is used..")
            }; 
       };

     //hashing the password 
     const hashPassword =  bcrypt.hashSync(password,Number(process.env.SALT),(err,result)=>{
       if(err) throw err
     });
     // Adding new user to Database
     
     //const query =`INSERT INTO users (name,adress,email,password,phone,role_id) VALUES('${name}','${adress}','${email}','${hashPassword}','${phone}','${role_id}');`
     const query =`INSERT INTO users (name,adress,email,password,phone,role_id) VALUES(?,?,?,?,?,?)`
     const data=[name,adress,email,hashPassword,phone,role_id]
     connection.query(query,data,(err,result)=>{if(err) throw err});

      // if everything is good get this res..
      res.json("Your account has been successfully created.")
    })
};

module.exports = {
    register,
};
