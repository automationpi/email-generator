const db = require('./db');

//generate integer in a range
function intInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function generateEmail(){
    var name1 = db.firstName;
    var name2 = db.lastName;
    var domains = db.domains;
  
    var firstName = (name1[intInRange(0, name1.length + 1)]);
    var lastName = (name2[intInRange(0, name2.length + 1)]);
    var domain = (domains[intInRange(0, domains.length)]);
    var randomNumber = intInRange(400,99999);
    var email = firstName.toLowerCase() + '.' + lastName.toLowerCase()+randomNumber+'@'+domain;
  return {email : email};
  }

module.exports = {
    generateEmail
}