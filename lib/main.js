$(document).ready(function() {
    $('#pos').submit(function(){
        var txt = $('textarea').val();
        // get pos txt and replace content of #result with output
        var words = new Lexer().lex(txt);
        var result = new POSTagger().tag(words);
        $('#result').empty();
        // alert(result)
        for (i in result) {
            var word = result[i];
            $('#result').append(word[0] + ": " + word[1] + "<br />");
        }
        return false;
    });
});

