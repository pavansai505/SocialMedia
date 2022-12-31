const router=require('express').Router()
const passport=require('passport')
const user=require('./user.controller')


router.post('/signup',user.signup)
router.get('/signup',user.userList)































function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401)
    }

    
// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['email','profile'] }));

// router.get('/google/callback', 
//   passport.authenticate('google', { 
//     successRedirect:"/protected",
//     failureRedirect: '/failed' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
router.get('/logout', async (req,res,next)=>{
  req.logout( 
    (err)=>{
      if (err) next(err)
      req.session.destroy()
      res.send({"msg":"logged out"})
    }
  );
  
 
});





module.exports=router