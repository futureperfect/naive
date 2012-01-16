var tokenizer = exports;

tokenizer.tokenize = function(text) {
    var re = /\W+/g;
    var terms = text.replace(re, " ").split(/\s+/g);
    terms = _.filter(terms, function(term) { return term.length > 0})
    return _(terms).map(function(term) {
                            return term.toLowerCase();
                        })
}