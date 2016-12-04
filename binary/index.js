"use strict";

const Promise = require("bluebird");

const fs = require("fs");

module.exports.fetchBinary = Promise.coroutine(function* (event, context, callback) {
  console.log(event);

  try {
    const content = fs.readFileSync("data/TMFFB_2Pedals_Template.pdf");

	  //const document = new Buffer([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);

    /*const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf"
      },
      body: document.toString("base64"),
      isBase64Encoded: true
    };*/

    return callback(null, content.toString("base64"));
  } catch (errorMessage) {
    console.log(errorMessage);

    /*const response = {
      statusCode: 400,
      body: errorMessage
    };*/

    return callback(null, errorMessage);
  }
});
