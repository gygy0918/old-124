//index.js
//require `babel/register` to handle JavaScript code
require('babel-register');
require('./server.js');
require('babel-polyfill')
const { makeExecutableSchema } = require('graphql-tools');