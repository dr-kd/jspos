$(document).ready(function() {
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

