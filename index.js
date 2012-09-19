/**
 * Simple node wrapper around library, so it's all structured together in module
 */

exports.POSTagger = require('./lib/POSTagger.js');
exports.Lexer = require('./lib/lexer.js');
exports.version = require('package').version;
