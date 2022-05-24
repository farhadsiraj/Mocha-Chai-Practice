"use strict";
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const should = require("chai").should();

describe("sinon tests", () => {
  let student;
  let schedule;

  beforeEach(() => {
    student = {
      dropClass: (classId, callback) => {
        if (!!callback.dropClass) {
          callback.dropClass();
        } else {
          callback();
        }
      },
    };

    schedule = {
      dropClass: () => {
        console.log("class dropped");
      },
    };
  });

  describe("student.dropClass", () => {
    it("should call the callback", () => {
      let spy = sinon.spy();

      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it("should call the callback and log to the console", () => {
      function onClassDropped() {
        console.log("onClassDropped was called");
      }
      let spy = sinon.spy(onClassDropped);

      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it("should call the callback even if it's a method of an object", () => {
      sinon.spy(schedule, "dropClass");

      student.dropClass(1, schedule);
      schedule.dropClass.called.should.be.true;
    });
  });
});
