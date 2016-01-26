function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Address(street, city, state, addressType, email) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addressType = addressType;
  this.email = email;

};

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
};


$(document).ready(function() {
  $("#add-address-home").click(function() {
    var addressType = "Home"
    $("#new-addresses").append('<div id="new-addresses2">' +
                                '<div class="new-address">' +
                                '<h3 class="addressHeader">Home</h3>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                                '</div>' +
                               '</div>');




  });
  $("#add-address-work").click(function() {
    var addressType = "Work"
    $("#new-addresses").append('<div id="new-addresses2">' +
                                '<div class="new-address">' +
                                '<h3 class="addressHeader">Work</h3>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                                '</div>' +
                               '</div>');


  });
  $("#add-address-school").click(function() {
    var addressType = "School"
    $("#new-addresses").append('<div id="new-addresses2">' +
                                '<div class="new-address">' +
                                '<h3 class="addressHeader">School</h3>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                                '</div>' +
                               '</div>');



  });
  $("#add-address-email").click(function() {
    var addressType = "Email"
    $("#new-addresses").append('<div id="new-addresses2">' +
                                '<div class="new-address">' +
                                '<h3 class="addressHeader">Email</h3>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Email Address</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 
                                '</div>' +
                               '</div>');



  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#inputtedFirstName").val();
    var inputtedLastName = $("input#inputtedLastName").val();
    var newContact = new Contact (inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var addressType = $(this).find(".addressHeader").val();

      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, addressType);
      newContact.addresses.push(newAddress);
    });

    $("div.dropdown-menu").click(function() {
      var inputedAddress = $(".add-address-home").val();
      var inputedAddress = $(".add-address-work").val();
      var inputedAddress = $(".add-address-school").val();
    })

    $('#new-addresses2:last-child', this).remove();

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#inputtedFirstName").val("");
    $("input#inputtedLastName").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append(address.addressType + "<li>" + address.fullAddress() + "</li>");
      });
    });
  });

});
