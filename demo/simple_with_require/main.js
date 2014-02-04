requirejs.config({
    baseUrl: '../../lib/',
    paths: {
        'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
        'jspos/lexer': 'lexer',
        'jspos/post_tagger': 'POSTagger'
    }
});

require(['jquery', 'jspos/lexer', 'jspos/post_tagger'], function($, Lexer, POSTagger) {
    $('#pos').submit(function(){
        var txt = $('textarea').val();
        // get pos txt and replace content of #result with output
        var words = new Lexer().lex(txt);
        var tagger = new POSTagger();
        var result = tagger.tag(words);
        $('#result').empty();
        $('#result').append(tagger.prettyPrint(result));
        return false;
    });
});

