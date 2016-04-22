describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

//given 111 it shows "one hundred and eleven"
describe('numbersToWords', function() {
  describe('convert()', function() {
    it('should return "one hundred and eleven" when the value 111 is presented', function() {
      var stringOfNumbers = 111;
      stringOfNumbers.convert == "one hundred and eleven";
    })
  })
})

//given 21 it shows "twenty-one"
describe('numbersToWords', function() {
  describe('convert()', function() {
    it('should return "twenty-one" when the value 21 is presented', function() {
      var stringOfNumbers = 21;
      stringOfNumbers.convert == "one hundred and eleven";
    })
  })
})
