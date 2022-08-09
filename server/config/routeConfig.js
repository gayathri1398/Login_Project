import JWTPassport from 'passport-jwt';

import { UserModel } from '../database/user.js';

// strategy
const JWTStrategy = JWTPassport.Strategy;
const ExtractJWT = JWTPassport.ExtractJwt;

const options={
    jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey :'UserToken'
}

export default (passport)=>{
   passport.use(
       new JWTStrategy(options,async(jwt__payload,done)=>{
           try {
               const userExists = await UserModel.findById(jwt__payload.user);
               if(!userExists) return done(null,false);
               return done(null,userExists);
           } catch (error) {
               throw new Error(error)
           }
         
       })
   )
  
}