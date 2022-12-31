const passport=require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID="795216640706-35iaglbq5qe2abfk31c7uupjd6fbrdfk.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8010/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})