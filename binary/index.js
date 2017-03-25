"use strict";

const fs = require("fs");

module.exports.fetchBinary = (event, context, callback) => {
  const content = fs.readFileSync("binary/sample.pdf");

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=\"sample.pdf\""
    },
    body: content.toString("base64"),
    isBase64Encoded: true
  };

  return callback(null, response);
};
