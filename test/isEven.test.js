"use strict";
const chai = require("chai");
const expect = chai.expect;
const should = require("chai").should();

const isEven = require("../isEven");

describe("isEven", () => {
  it("should return true when number is even", () => {
    isEven(4).should.be.true;
  });

  it("should return false when the number is odd", () => {
    expect(isEven(5)).to.be.false;
  });
});
