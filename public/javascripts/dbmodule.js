//Database interactions
var mongojs = require('mongojs');
var databaseURL = "localhost/villa";
var db = mongojs(databaseURL);

//Save new membership
exports.saveMember=function(fname, lname, email, address, city, state, zip, memUsername, memPassword, response)
{
    db.members.save({"fname":fname, "lname":lname, "email":email, "address":address, "city":city, 
    "state":state, "zip":zip, "memUsername":memUsername, "memPassword":memPassword}, 
    function(error, saved)
    {
        if(error || !saved)
        {
            console.log('Unable to save member');
            response.render('error', {message:'error'});
        }
        else
        {
            response.render('savedMembership', {message:'Membership created successfully!', title:'Success'});
        }
    });
}

//Show luxury resorts and rooms to make reservation
exports.makeReservation=function(username, password, response)
{
    db.members.find({"memUsername":username, "memPassword":password}, function(error, members)
    {
        if(error || !members)
        {   response.render('memberLogin', {message:'Invalid User'});    }
        else if(members.length==0)
        {   response.render('memberLogin', {message:'Invalid user'})    }
        else
        {   response.render('reservation', {title:'Reservation', message:'Welcome '+username+', make your reservation here!'}); }
    });
}