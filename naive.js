var naive = exports;

naive.train = function(classes, documents) {
    var vocabulary = extract(documents)
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

naive.extractTerms = function(documents) {
    _ = require("underscore")
    return _.map(documents, function(num) {
        return [];
    })
}
