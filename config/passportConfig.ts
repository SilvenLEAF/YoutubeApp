import passport from 'passport';
import User from '../models/User';





import LoginStrategy from './passportStrategies/LoginStrategy';
import SignupStrategy from './passportStrategies/SignupStrategy';




/* ------------------------------------
.     SERIALIZE AND DESERIALIZE
------------------------------------ */
passport.serializeUser<any, any>((user, done)=>{
  done(null, user.id);
});


passport.deserializeUser((id, done)=>{
  User.findById(id).then(user=> done(null, user));
});















/* ------------------------------------
.               STRATEGIES
------------------------------------ */
passport.use('local-signup', SignupStrategy);
passport.use('local-login', LoginStrategy);
