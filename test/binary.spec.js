"use strict";

const Promise = require("bluebird");
const assert = require("chai").assert;

describe("binary", () => {
  it("Should return one response", (done) => {
    Promise.coroutine(function* () {
      try {
        const index = require("../binary/index");

        yield index.fetchBinary({}, {}, (error, encodedContent) => {
          assert.isString(encodedContent);

          const decodedContent = new Buffer(encodedContent, "base64");

          assert.deepEqual(decodedContent.slice(0, 4), new Buffer([0x25, 0x50, 0x44, 0x46]), "Invalid PDF");

          done();
        });
      } catch (errorMessage) {
        done(errorMessage);
      }
    })();
  });
});
