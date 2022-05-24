"use strict";
const chai = require("chai");
const expect = chai.expect;
const should = require("chai").should();

const add = require("../add");

describe("add", () => {
  let num;
  beforeEach(() => {
    num = 5;
  });
  it("should be 10 when adding 5 to 5", () => {
    num = add(num, 5);
    num.should.equal(10);
  });

  it("should be 12 when adding 7 to 5", () => {
    add(num, 7).should.equal(12);
  });
});
