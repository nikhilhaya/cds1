'use strict';

/*
  sequelize CLI command to define company model 
  node_modules/.bin/sequelize model:create --name=Company 
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
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    abrev: DataTypes.STRING,
    weekendmax: DataTypes.STRING,
    terms: DataTypes.STRING,
    url: DataTypes.STRING,
    store: DataTypes.STRING
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
      console.log("\nCompany Model Synced\n")
    })
    .catch(function(error){
      console.log(error);
    });

  return Company;
};