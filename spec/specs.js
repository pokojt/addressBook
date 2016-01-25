describe ('Contact', function(){
  it("creates a new contact with the given properties", function() {
    var newContact = new Contact("Daren", "Schaad");
    expect(newContact.firstName).to.equal("Daren");
    expect(newContact.lastName).to.equal("Schaad");
    expect(newContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function () {
    var newContact = new Contact("Taylor", "Pokoj");
    expect(newContact.fullName()).to.equal("Taylor Pokoj");
  });

});
