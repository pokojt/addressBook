describe ('Contact', function(){
  it("creates a new contact with the given properties", function() {
    var newContact = new Contact("Daren", "Schaad");
    expect(newContact.firstName).to.equal("Daren");
    expect(newContact.lastName).to.equal("Schaad");
    expect(newContact.addresses).to.equal([])
  });

  it("adds the fullName method to a contact", function () {
    var newContact = new Contact("Taylor", "Pokoj");
    expect(newContact.fullName()).to.equal("Taylor Pokoj");
  });

});
describe ('Address', function(){
  it("creates a new address with the given properties", function() {
    var newAddress = new Address("123 Main", "Portland", "Oregon");
    expect(newAddress.street).to.equal("123 Main");
    expect(newAddress.city).to.equal("Portland");
    expect(newAddress.state).to.eql("Oregon");
  });

  it("adds the fullAddress method to a contact", function () {
    var newAddress = new Address("123 Main", "Portland", "Oregon");
    expect(newAddress.fullAddress()).to.equal("123 Main, Portland, Oregon");
  });

});
