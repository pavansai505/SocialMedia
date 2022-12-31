const userModel=require('./user.entity')

 const signup=(req,res)=>{
    const data=req.body
    const newUser=new userModel({
        userName:data.userName,
        userMail:data.userMail,
        userPassword:data.userPassword
    })
    newUser.save((err,result)=>{
        if(err) res.status(401).send({"msg":err})
        else res.cookie("pavan","success").status(200).send({"msg":"user added successfully"})
    })
 }
 const userList=(req,res)=>{
    userModel.find({},(err,response)=>{
        res.send({"data":response})
    })
 }

 module.exports={
    signup,
    userList
 }