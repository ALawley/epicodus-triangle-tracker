// Behavior                 Input                  output
// Not a triangle           1, 2, 7               Not a triangle
// Equilateral              3, 3, 3               Equilateral triangle
// isosceles                3, 2, 2               isosceles triangle
// scalene                  3, 4, 5               scalene triangle


describe('isTriangle', function () {
  it("is false when the sum of any two sides are less than or equal to the third", function() {
    expect(isTriangle(1, 2, 7)).to.equal(false);
  });
  it("is true when the sum of any two sides are greater than the third", function() {
    expect(isTriangle(3, 4, 5)).to.equal(true);
  });
});

describe('isScalene', function () {
  it("is false when any two sides are equal", function() {
    expect(isScalene(2, 2, 2)).to.equal(false);
  });
  it("is true when no two sides are equal", function() {
    expect(isScalene(2, 3, 4)).to.equal(true);
  });
});

describe('isIsosceles', function() {
  it("is false when no two sides are equal", function() {
    expect(isIsosceles(6, 7, 8)).to.equal(false);
  });
  it("is false when all three sides are equal", function() {
    expect(isIsosceles(6, 6, 6)).to.equal(false);
  });
  it("is true when only two sides are equal", function() {
    expect(isIsosceles(6, 6, 7)).to.equal(true);
  });
});

describe('isEquilateral', function () {
  it("is true when all three sides are equal", function() {
    expect(isEquilateral(6, 6, 6)).to.equal(true);
  });
  it("is false when not all three sides are equal", function() {
    expect(isEquilateral(6, 6, 7)).to.equal(false);
  });
});
