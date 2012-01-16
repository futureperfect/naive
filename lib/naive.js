var naive = exports;
    _ = require('underscore')

naive.train = function(documents) {
    _.each(documents, function(item) {
                        if((item.hasOwnProperty("c")) === false) {
                            throw("Document missing class property 'c'")
                        } 
                        if((item.hasOwnProperty("d")) === false) {
                            throw ("Document missing document property 'd'")
                        }
                      });
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
    var re = /\W+/g;
    return _.chain(documents).map(function(document) {
                                var terms = document["d"].replace(re, " ").split(/\s+/g);
                                terms = _.filter(terms, function(term) { return term.length > 0})
                                return _(terms).map(function(term) {
                                                        return term.toLowerCase();
                                                    })
                            }).flatten().union().value()
}

naive.documentTrainingClassDistribution = function(trainingSet) {
    var distribution = {}
    _.each(trainingSet, function(item) {
                            if(distribution.hasOwnProperty(item.c)) {
                                distribution[item.c] += 1
                                return;
                            }
                            distribution[item.c] = 1;
                        });
    return distribution
}
