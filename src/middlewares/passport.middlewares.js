const passport = require('passport'); // libreria base
const JwrStrategy = require('passport-jwt').Strategy; // la manera en que se va a utilizar
const ExtractJwt = require('passport-jwt').ExtractJwt; //para obtener el token

const { findUserById } = require('../users/users.controllers')

const options = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'Ac4d3ml0vers',
}

passport.use(new JwrStrategy(options, (tokenDecoded, done) => {

  //!done(error, user)

//* done(null, false)
//* done(error, false)
//* done(null, user)
findUserById(tokenDecoded.id)
.then(user => {
    if(user){
      done(null, user)
    }else{
       done(null, false)
    }
})
.catch(err => {
    done(err, false)
})
}))

module.exports = passport

