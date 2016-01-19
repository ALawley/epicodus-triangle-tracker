// Behavior                 Input                  output
// Not a triangle           1, 2, 7               Not a triangle
// Equilateral              3, 3, 3               Equilateral triangle
// isosceles                3, 2, 2               isosceles triangle
// scalene                  3, 4, 5               scalene triangle


describe('isTriangle', function () {
  it("is false when the sum of any two sides are less than or equal to the third", function() {
    expect(isTriangle(1, 2, 7)).to.equal(false);
  });

});
