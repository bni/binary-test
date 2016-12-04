"use strict";

const Promise = require("bluebird");

const fs = require("fs");

module.exports.fetchBinary = Promise.coroutine(function* (event, context, callback) {
  console.log(event);

  try {
    const content = fs.readFileSync("data/dell-u2713h_Users_Guide_en-us.pdf");

    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf"
      },
      body: content.toString("base64"),
      isBase64Encoded: true
    };

    return callback(null, response);
  } catch (errorMessage) {
    console.log(errorMessage);

    const response = {
      statusCode: 400,
      body: errorMessage
    };

    return callback(null, response);
  }
});
