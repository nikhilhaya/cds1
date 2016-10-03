var PassportLocalStrategy = require('passport-local').Strategy;
var bcrypt   = require('bcrypt-nodejs');

'use strict';

/*
  sequelize CLI command to define book model 
  node_modules/.bin/sequelize model:create --name=Book 
  --attributes 
  name:string,
  isbn:integer,
  publication_date:date,
  description:text,
  author_id:integer 
  --underscored
  
  to persist table in db:
  node_modules/.bin/sequelize db:migrate
*/

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isadmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  },{
    classMethods: {
      // timestamps: false,
      // underscored: false,
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  sequelize
    .sync({
      // force: true,
      logging: console.log
    })
    .then(function(){
      console.log("\nUser Model Synced\n")
    })
    .catch(function(error){
      console.log(error);
    });

    // // generating a hash
    // User.methods.generateHash = function(password) {
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    // };

    // // checking if password is valid
    // User.methods.validPassword = function(password) {
    //     return bcrypt.compareSync(password, this.local.password);
    // };


  return User;
};

// module.exports.getUsers = function(callback, limit){
//   //Get a list of all users using model.findAll()
//     User.findAll()
//       .then(function (users) {
//         res.status(200).json(users);
//       })
//       .catch(function (error) {
//         res.status(500).json(error);
//       });
// }