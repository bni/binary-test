"use strict";

const moment = require("moment");
const S3 = require("aws-sdk/clients/s3");
//const request = require("request");

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
