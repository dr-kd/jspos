/**
 * Run with "vows" command-line util, "npm test", or require('test/test_codes').run()
 */

var vows = require('vows'),
  assert = require('assert'),
  jspos = require('../'),
  fs = require('fs')
  path = require('path');

var lexer = new jspos.Lexer();
var tagger = new jspos.POSTagger();

// load grammar codes, directly from README.md
var doc_text = ("" + fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8')).trim();

// this might be improved with a regex...
var codes = [];
var ct = doc_text.split('\n## TAGS\n')[1].split('\n## LICENSE\n')[0].split('\n').filter(function(s){
  return s != '';
}).forEach(function(c){
  codes.push(c.split('  ').filter(function(s){
    return s != '';
  }));
});

// build tests
code_tests = {};
codes.forEach(function(c){
  var words = c[2].split(',')

  words.forEach(function(s,i){
    words[i] = s.trim();
  });

  if (c[2] == ","){
    var tags = tagger.tag(',');
  }else{
    var tags = tagger.tag(words);
  }

  tags.forEach(function(tag, i, a){
    code_tests[c[1] + " (" + c[0] + ")"] = function(){
      assert(tag[1] == c[0], "got " + tag[1] + ' on "' + tag[0] + '"');
    }
  });
});

exports.test_jspos = vows.describe('jsPOS language codes').addBatch(code_tests);
