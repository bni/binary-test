# Binary files in API Gateway/Lambda test

Note: For this to work in a browser you have to add "\*/\*" to binary Media Types in API Gateway console.

If you don't need to support browsers you can instead add "application/pdf" there, and request with Accept header like so:

curl -H "Accept: application/pdf" https://xxxxxxxx.execute-api.eu-west-1.amazonaws.com/dev/fetchBinary > test.pdf
