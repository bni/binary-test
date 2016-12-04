"use strict";

const assert = require("chai").assert;

describe("binary", () => {
  it("Should return one response", (done) => {
    try {
      const index = require("../binary/index");

      index.fetchBinary({}, {}, (error, response) => {
        assert.isString(response.body);

        const decodedContent = new Buffer(response.body, "base64");

        assert.deepEqual(decodedContent.slice(0, 4), new Buffer([0x25, 0x50, 0x44, 0x46]), "Invalid PDF");

        done();
      });
    } catch (errorMessage) {
      done(errorMessage);
    }
  });
});
