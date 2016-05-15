// code solution here

function President(name, politicalParty, yearsInOffice, homeState) {
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;
}

President.prototype.veto = function() {
  return "NO!";
};

President.prototype.passBill = function() {
  return "You can do that!";
};

President.prototype.doCharity = function() {
  return "I like to help people.";
};

President.prototype.conductPressInterview = function() {
  return "I am proud to be an American.";
};

President.prototype.sayHi = function() {
  return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
};

var washington = new President("George Washington", "Independent Party", "1789-1797", "Virginia");
var lincoln = new President("Abraham Lincoln", "National Union Party", "1861-1865", "Kentucky");
var nixon = new President("Richard Nixon", "Republican Party", "1969-1974", "California");
var carter = new President("Jimmy Carter", "Democratic Party", "1977-1981", "Georgia");
