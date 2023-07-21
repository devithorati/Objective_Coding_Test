const { expect } = require("chai");
const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  // true scenarios
  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it("should return true given null, null", () => {
    expect(deepEqual(null, null)).to.equal(true);
  });

  it("should return true given two same strings", () => {
    expect(deepEqual("hello", "hello")).to.equal(true);
  });

  it("should return true given two same numbers", () => {
    expect(deepEqual(97, 97)).to.equal(true);
  });

  it("should return true given two same boolean values", () => {
    expect(deepEqual(true, true)).to.equal(true);
  });

  it("should return true given two empty objects", () => {
    expect(deepEqual({}, {})).to.equal(true);
  });

  it("should return true given two equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });

  it("should return true given two equal objects with two fields", () => {
    expect(
      deepEqual(
        { name: "Bob", email: "Bob@gmail.com" },
        { name: "Bob", email: "Bob@gmail.com" }
      )
    ).to.equal(true);
  });

  it("should return true given two objects with missing field", () => {
    expect(
      deepEqual({ name: "Bob" }, { name: "Bob", email: undefined })
    ).to.equal(true);
  });

  it("should return true given two objects with missing field", () => {
    expect(
      deepEqual({ name: "Bob" }, { name: "Bob", email: undefined })
    ).to.equal(true);
  });

  it("should return true given two objects with three fields with  one undefined value and missing field", () => {
    expect(
      deepEqual(
        { name: "Bob", email: "Bob@gmail.com", age: undefined },
        { name: "Bob", email: "Bob@gmail.com" }
      )
    ).to.equal(true);
  });

  // false scenarios
  it("should return false given undefined, null", () => {
    expect(deepEqual(undefined, null)).to.equal(false);
  });

  it("should return false given null, undefined", () => {
    expect(deepEqual(null, undefined)).to.equal(false);
  });

  it("should return false given two diffrent strings", () => {
    expect(deepEqual("hello", "hai")).to.equal(false);
  });

  it("should return false given two different numbers", () => {
    expect(deepEqual(97, 87)).to.equal(false);
  });

  it("should return false given two booleans", () => {
    expect(deepEqual(false, true)).to.equal(false);
  });

  it("should return false given null, and empty objects", () => {
    expect(deepEqual(null, {})).to.equal(false);
  });

  it("should return false given two objects with different field values", () => {
    expect(deepEqual({ name: "Bob" }, { name: "John" })).to.equal(false);
  });

  it("should return false given two equal objects with two field values", () => {
    expect(
      deepEqual(
        { name: "Bob", email: "Bob@gmail.com" },
        { name: "Bob", email: "Bob123@gmail.com" }
      )
    ).to.equal(false);
  });

  it("should return false given two objects with missing field, undefined", () => {
    expect(
      deepEqual(
        { name: "Bob", email: "Bob@gmail.com" },
        { name: "Bob", email: undefined }
      )
    ).to.equal(false);
  });

  it("should return false given two objects with missing field in one object", () => {
    expect(
      deepEqual({ name: "Bob", email: "Bob@gmail.com" }, { name: "Bob" })
    ).to.equal(false);
  });

  it("should return false given two objects with three fields with  one undefined value", () => {
    expect(
      deepEqual(
        { name: "Bob", email: "Bob@gmail.com", age: 25 },
        { name: "Bob", email: "Bob@gmail.com", age: undefined }
      )
    ).to.equal(false);
  });

  it("should return false given two objects with three fields with  one null value and one missing field", () => {
    expect(
      deepEqual(
        { name: "Bob", email: "Bob@gmail.com", age: null },
        { name: "Bob", email: "Bob@gmail.com" }
      )
    ).to.equal(false);
  });
});
