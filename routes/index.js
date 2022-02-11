var express = require('express');
var router = express.Router();
var dbmodule = require('../public/javascripts/dbmodule.js');

var loggedIn = false;

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Villuxuria' });
});

//- Plan your visit
router.get('/planVisit', function(request, response)
{
  response.render('planVisit', {title:'Plan Visit', message:'Plan Your Visit'});
});

//- Go to yoga page
router.get('/doYoga', function(request, response)
{
  response.render('doYoga', {title:'Yoga', message:'Yoga!!'});
});

//- Go to dolphin watching
router.get('/dolphinWatching', function(request, response)
{
  response.render('dolphinWatching', {title:'Dolphin Watching', message:'Dolphin Watching!'});
});

//- Go to spa days
router.get('/spaDay', function(request, response)
{
  response.render('spaDays', {title:'Spa Days', message:'Spa Days'});
});

//- Go to the romantic side
router.get('/romantic', function(request, response)
{
  response.render('romantic', {title:'Get Romantic', message:'Get Romantic'});
});

//- Stay
router.get('/stay', function(request, response)
{
  response.render('stay', {title:'Stay', message:'Your Stay'});
});

//- New member registration
router.get('/newMemberRegister', function(request, response)
{
  response.render('newMemberRegister', {message:'Register Here', title:'Registration'});
});

//- Successfully saved new membership
router.post('/savedMembership', function(request, response)
{
  //response.render('/savedMembership', {message:'Membership created successfully!', title:'Saved Membership'});
  var fname = request.body.fname;
  var lname = request.body.lname;
  var email = request.body.email;
  var address = request.body.address;
  var city = request.body.city;
  var state = request.body.state;
  var zip = request.body.zip;
  var memUsername = request.body.memUsername;
  var memPassword = request.body.memPassword;
  dbmodule.saveMember(fname, lname, email, address, city, state, zip, memUsername, memPassword, response);
});

//- Login
router.get('/memberLogin', function(request, response)
{
  response.render('memberLogin', {title:'Member Login', message:'Login'});
}).post('/reservation', function(request, response)
{
  //Make sure member logs in with info saved in database
  var username = request.body.username;
  var password = request.body.password;
  dbmodule.makeReservation(username, password, response);
});

//- Make reservations
// router.get('/reservation', function(request, response)
// {
//   // if(loggedIn=false)
//   // {
//   //   response.render('/memberLogin', {title:'Member Login', message:'You must be logged in to make reservations'});
//   // }
//   // else
//   // {
//   //   loggedIn=true;
    
//   // }
  
//   //response.render('reservation', {title:'Reservation', message:'Your Reservation'});
  
// });



module.exports = router;
