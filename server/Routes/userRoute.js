const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const multer = require('multer');


// img storage path
const imgconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"./uploads")
  },
  filename:(req,file,callback)=>{
      callback(null,`imgae-${Date.now()}. ${file.originalname}`)
  }
})


// img filter
const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(new Error("only images is allowd"))
  }
}

const upload = multer({
  storage:imgconfig,
  fileFilter:isImage
});


// ___________ Register ____________

router.post("/register" , upload.single("photo")  , (req, res) => {

    const {filename} = req.file;

    const {name, email, password} = req.body;

    if(!name || !filename || !email || !password){
      res.status(401).json({status:401,message:"fill all the data"})
    }

    const newUser = new User({ name, email, password, filename });

    try {
        newUser.save();
        res.send("User Registered Successfully!");
    } 
    catch (error) {
        res.status(404).json({message: error})
    }

});


// _______ Login _______

router.post("/login" , async (req, res) => 
{
   const { email, password } = req.body;

   try {
    
     const user = await User.find({ email, password});

     if(user.length > 0)
     {
        const currentUser = {
            name: user[0].name ,
            email: user[0].email,
            isAdmin: user[0].isAdmin,
            _id: user[0]._id
        }

        res.send(currentUser);
     }
     else{
        res.status(404).json({message : "user Login Failed"});
     }

   } 
   catch (error) {
     return res.status(400).json({message: "something went wrong!" , error})
   }
})


////_________________________ upload images _____________________________////

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb){
//       cb(null, "uploads")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//     }
//   })
// }).single("image")

// router.post('/uploads', upload, (req, res) => {
//   res.send("File Uploaded Successfully!")
// });

//// ___________________________________________________________________ ////

module.exports = router;