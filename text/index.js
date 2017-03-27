"use strict";

const moment = require("moment");
const S3 = require("aws-sdk/clients/s3"); // Not used, for now
const request = require("request"); // Not used, for now

// Hack around broken soap module that tries to read .ejs files that dont exist
const mock = require("mock-require"); mock("fs", {readFileSync: () => {return "";}});
const soap = require("soap"); mock.stop("fs");

module.exports.fetchText = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: `Today is ${moment().format("dddd")}.`
  };

  return callback(null, response);
};
