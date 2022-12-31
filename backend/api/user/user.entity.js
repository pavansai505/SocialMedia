const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true
    },
    userMail:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    userPassword:{
        type:String,
        trim:true,
        required:true
    },

})

userSchema.pre('save',function(next){
    const user=this
    if(this.isModified('userPassword') || this.isNew()){
        bcrypt.genSalt(10,(err,salt)=>{
            if(err) next(err)
            bcrypt.hash(user.userPassword,salt,(err,hash)=>{
                if(err) next(err)
                user.userPassword=hash
                next()
            }) 
        })
    }
    else{
        next()
    }
})


module.exports=mongoose.model("user",userSchema)