var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');

var app = express();

var models = require('./server/models/');

require('./server/config/passport')(passport); 

	
	app.use(morgan('dev')); 			
	app.use(cookieParser()); 			
	app.use(bodyParser()); 				

	// app.set('view engine', 'ejs'); 		

	app.use(session({ secret: 'XYZ' , resave:true, saveUninitialized:true })); // session secret
	app.use(flash()); 					
	app.use(passport.initialize());
	app.use(passport.session()); 		

	
	app.use(expressValidator({
	  errorFormatter: function(param, msg, value) {
	      var namespace = param.split('.')
	      , root    = namespace.shift()
	      , formParam = root;

	    while(namespace.length) {
	      formParam += '[' + namespace.shift() + ']';
	    }
	    return {
	      param : formParam,
	      msg   : msg,
	      value : value
	    };
	  }
	}));

	//passport flash messages
	app.use(function(req, res, next){
		res.locals.success_msg = req.flash('success_msg');
		res.locals.error_msg = req.flash('error_msg');
		res.locals.error = req.flash('error');
		next();
	})
	

	models.sequelize
	  .authenticate()
	  .then(function () {
	    console.log('\nPostGreSQL Connection successful\n');
	  })
	  .catch(function(error) {
	    console.log("Error creating PostGreSQL connection:", error);
	  });


	  		app.use(express.static( __dirname + '/client'));

	  		var api = require('./app/routes/api')(app, express);
	  		var apicompanies = require('./app/routes/apicompanies')(app, express);

	  		app.use('/api',apicompanies);
	  		app.use('/api',api);
	  		// var apiusers = require('./app/routes/apiusers')(app, express);
	  		// app.use('/api',apiusers);


	  		app.get('*', function(req, res){
	  			res.sendFile(__dirname + '/client/app/views/index.html');
	  		})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log("\nServer Listening on Port: ", app.get('port'), "\n");
});