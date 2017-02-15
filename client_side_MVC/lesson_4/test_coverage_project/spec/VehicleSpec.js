describe('Vehicle constructor', function() {
  beforeEach(function() {
    this.vehicle = new Vehicle({
      make: 'Honda',
      model: 'Accord'
    });
  });

  it('sets the make and model properties when an object is passed in', function() {
    expect(this.vehicle.make).toEqual('Honda');
    expect(this.vehicle.model).toEqual('Accord');
  });

   it('returns a concatenated string with make and model', function() {
    expect(this.vehicle.toString()).toEqual('Honda Accord');

    this.vehicle.model = 'Civic';
    expect(this.vehicle.toString()).toEqual('Honda Civic');
  });

  it('returns a message when the horn is honked', function() {
    expect(this.vehicle.honkHorn()).toMatch(/beep/);
  });
});