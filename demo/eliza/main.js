/**
   *  from prototype
   *
   *  Array#filter(iterator[, context]) -> Array
   *  - iterator (Function): An iterator function to use to test the
   *    elements.
   *  - context (Object): An optional object to use as `this` within
   *    calls to the iterator.
   *
   *  Returns a new array containing all the items in this array for which
   *  `iterator` returned a truthy value.
   *
   *  `Array#filter` acts as an ECMAScript 5 [polyfill](http://remysharp.com/2010/10/08/what-is-a-polyfill/).
   *  It is only defined if not already present in the user's browser, and it
   *  is meant to behave like the native version as much as possible. Consult
   *  the [ES5 specification](http://es5.github.com/#x15.4.4.20) for more
   *  information.
  **/
if (!Array.prototype.filter){
  Array.prototype.filter = function(iterator) {
    var object = Object(this);
    var results = [], context = arguments[1], value;

    for (var i = 0, length = object.length >>> 0; i < length; i++) {
      if (i in object) {
        value = object[i];
        if (iterator.call(context, value, i, object)) {
          results.push(value);
        }
      }
    }
    return results;
  }
}

function findWordCombo(combo, words){
  var combos = combo.split(' ');
  return words.filter(fucntion(v, i, a){
    combos.forEach()
  });
}

$(function(){
  var lexer = new Lexer();
  var tagger =  new POSTagger();

  // talk data
  var data = {
    "init": [
      "How do you do.  Please tell me your problem.",
      "Please tell me what's been bothering you.",
      "Is something troubling you?"
    ],

    "synons" : {
      "be": ["am", "is", "are", "was"],
      "belief": ["feel", "think", "believe", "wish"],
      "cannot": ["can't"],
      "desire": ["want", "need"],
      "everyone": ["everybody", "nobody", "noone"],
      "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
      "happy": ["elated", "glad", "better"],
      "sad": ["unhappy", "depressed", "sick"]
    },

    "sorry":[
       "Please don't apologise.",
       "Apologies are not necessary.",
       "I've told you that apologies are not required.",
       "It did not bother me.  Please continue."
     ]
  };

  function randq(name){
    var q = data[name];
    return q[Math.floor(Math.random()*q.length)];
  }

  $('#eliza').submit(function(){
    var v = $('#input').val(),
      out="";

    $('#output').append("YOU: " + v + "\n\n");

    var good_nouns = [];

    if (v.match(/\w+/) !== null){
      var words = tagger.tag(lexer.lex(v));
      console.log("words", words);
      // find the most relevant noun/pronouns
      var subjects = words.filter(function(s, i, a){ s.push(i); return (s[1] == 'PP$' || s[1] == 'PRP$' || s[1][0] == 'N'); });
      console.log("subjects", subjects);

    }

    if (out.length){
      $('#output').append("ELIZA: " + out +"\n\n");
    }

    return false;
  });

  $('#input').focus();
  $('#output').append("\n\nELIZA: " + randq('init') + "\n\n");



});
