const express = require('express');
const router = express.Router();
const fs=require("fs");



const folderPath=`${ __dirname}/data`;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/studentsList',function(req,res){
  fs.readFile(`${folderPath}/student.json`,function(err,data){
    if(err){
      console.log(err);
    }else{
      const dataFromFile=JSON.parse(data);
      console.log("data read from file ",dataFromFile);
      res.send(dataFromFile);
    }
  });
});

router.post('/add',function(req,res){
  console.log("req body from client side",req.body);
  const studentData=req.body;
fs.writeFile(`${folderPath}/student.json`,JSON.stringify(studentData),function(err){
    if(err){
      console.log("error in writing file");
    }
    else{
      console.log("File Written successfully");
      res.send(" created successfully ");
    }
  });
  
});

module.exports = router;