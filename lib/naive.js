var naive = exports;

naive.train = function(classes, documents) {
    var vocabulary = extractVocabulary(documents)
    return vocabulary
    //var docCount = documents.length
    // return {
    //             "documentCount": docCount,
    //                "classCount": classes.length,
    //              "vocabulary": vocabulary,
    //              "prior": {},
    //              "conditionalPrior": {}
    //            }
}

naive.apply = function() {
    function extractTokensFromDocument(vocabulary, document) {
        console.log("Extracting tokens from document not yet implemented");
    }
    extractTokensFromDocument()
}

naive.extractVocabulary = function(documents) {
    _ = require("underscore")
    return _.chain(documents).map(function(document) {
                                var terms = document.split(" ")
                                return _(terms).map(function(term) {
                                                        return term.toLowerCase();
                                                    })
                            }).flatten().union().value()
}
