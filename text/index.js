"use strict";

module.exports.fetchText = (event, context, callback) => {
  try {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain"
      },
      body: "Hello World!"
    };

    return callback(null, response);
  } catch (errorMessage) {
    console.error(errorMessage);

    const response = {
      statusCode: 500,
      body: errorMessage
    };

    return callback(null, response);
  }
};
