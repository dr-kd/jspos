# jspos

jspos is a Javascript port of [Mark Watson's FastTag Part of Speech Tagger](http://www.markwatson.com/opensource/) which was itself based on Eric Brill's trained rule set and English lexicon. jspos also includes a basic lexer that can be used to extract words and other tokens from text strings.


## FILES

* `lexicon.js` - Javascript version of Eric Brill's English lexicon
* `lexer.js` - Lexer to break a sentence into taggable tokens (e.g. words)
* `POSTagger.js` - the Part of Speech tagger.


## USAGE

See demo in **demos/simple/**.

    var words = new Lexer().lex("This is some sample text. This text can contain multiple sentences.");
    var taggedWords = new POSTagger().tag(words);
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
    }


### node.js

See demo using [vows](http://vowsjs.org/) testing in **test/**

You can install jspos in your project (once jspos is published to npm) with this command: `npm install jspos`. You can use it in your code, like this:

    var jspos = require('jspos'),
      lexer =  new jspos.Lexer(),
      tagger = new jspos.POSTagger();

    var tags = tagger.tag(lexer.lex("This is some text. It can be whatever length. Cool!"));
    console.log(tags)


### require.js

See demo in **demos/simple_with_require/**.

    define(['jspos/lib/post_tagger', 'jspos/lib/lexer'], function(POSTagger, Lexer){
      var lexer =  new Lexer(),
          tagger = new POSTagger();

      var tags = tagger.tag(lexer.lex("This is some text. It can be whatever length. Cool!"));
      console.log(tags)
    });

### developer tools

There are a few tools linked to npm, via **package.json**:

* `npm install` - install all dependencies
* `npm test`  - test the library
* `npm start` - start the demo webserver
* `npm run-script build` - creates a minified version of the library (for the web) in jspos.min.js


## TAGS

    CC   Coord Conjuncn           and,but,or
    CD   Cardinal number          one,two
    DT   Determiner               the,some
    EX   Existential there        there
    FW   Foreign Word             mon dieu
    IN   Preposition              of,in,by
    JJ   Adjective                big
    JJR  Adj., comparative        bigger
    JJS  Adj., superlative        biggest
    LS   List item marker         1,One
    MD   Modal                    can,should
    NN   Noun, sing. or mass      dog
    NNP  Proper noun, sing.       Edinburgh
    NNPS Proper noun, plural      Smiths
    NNS  Noun, plural             dogs
    POS  Possessive ending        ?s
    PDT  Predeterminer            all, both
    PP$  Possessive pronoun       my,one?s
    PRP  Personal pronoun         I,you,she
    RB   Adverb                   quickly
    RBR  Adverb, comparative      faster
    RBS  Adverb, superlative      fastest
    RP   Particle                 up,off
    SYM  Symbol                   +,%,&
    TO   ?to?                     to
    UH   Interjection             oh, oops
    VB   verb, base form          eat
    VBD  verb, past tense         ate
    VBG  verb, gerund             eating
    VBN  verb, past part          eaten
    VBP  Verb, present            eat
    VBZ  Verb, present            eats
    WDT  Wh-determiner            which,that
    WP   Wh pronoun               who,what
    WP$  Possessive-Wh            whose
    WRB  Wh-adverb                how,where
    ,    Comma                    ,
    .    Sent-final punct         . ! ?
    :    Mid-sent punct.          : ; ?
    $    Dollar sign              $
    #    Pound sign               #
    "    quote                    "
    (   Left paren                (
    )   Right paren               )



## LICENSE

jspos is licensed under the GNU LGPLv3



## ACKNOWLEDGEMENTS

Thanks to Mark Watson for writing FastTag, which served as the basis for jspos.


## AUTHOR

[Percy Wegmann](http://www.percywegmann.com/)

The orignal of this code is avallable [on google code](http://code.google.com/p/jspos/)

Kieren Diment <zarquon@cpan.org> added the demo.html and main.js files.

David Konsumer <konsumer@jetboystudio.com> updated demos & added npm/node/require.js support

The next step is to add noun phrase extraction routines and other utility functions (see the Perl Module [Lingua::EN::Tagger](http://search.cpan.org/perldoc?Lingua::EN::Tagger)  ).
