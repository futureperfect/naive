var naive = exports;

naive.train = function(classes, documents) {
    function extractVocabulary(documents) {
        console.log("Extracting vocabulary not yet implemented");
        return []
    }
    
    if(!classes || !documents) {
        return;
    }
    var vocabulary = extractVocabulary(documents)
    var docCount = documents.length
    return {
            "documentCount": docCount,
               "classCount": classes.length,
             "vocabulary": vocabulary,
             "prior": {},
             "conditionalPrior": {}
           }
}

naive.apply = function() {
    function extractTokensFromDocument(vocabulary, document) {
        console.log("Extracting tokens from document not yet implemented");
    }
    extractTokensFromDocument()
}
