/**
 * Simple javascript minifier
 * run with node build.js or npm run-script build
 */

var uglify = require('uglify-js'),
  path = require('path');
  fs = require('fs');

var fname = 'jspos.min.js';

var orig_code = "";
orig_code += fs.readFileSync(path.join(__dirname, 'lib', 'lexicon.js'), 'utf8');
orig_code += fs.readFileSync(path.join(__dirname, 'lib', 'lexer.js'), 'utf8');
orig_code += fs.readFileSync(path.join(__dirname, 'lib', 'POSTagger.js'), 'utf8');

var uglify_options = {
  strict_semicolons: true,
  mangle_options: {except: ['$super']},
  gen_options: {ascii_only: true},
};
var minified_code = uglify(orig_code, uglify_options);

fs.writeFileSync(path.join(__dirname, fname), minified_code, 'utf8');
console.log("Wrote minified file to " + fname);
