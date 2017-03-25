"use strict";

const moment = require("moment");

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
