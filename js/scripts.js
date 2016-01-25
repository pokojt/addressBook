function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#inputtedFirstName").val();
    var inputtedLastName = $("input#inputtedLastName").val();
    var newContact = new Contact (inputtedFirstName, inputtedLastName);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("input#inputtedFirstName").val("");
    $("input#inputtedLastName").val("");
  });
});
