var naive = exports;
    _ = require('underscore')
    trainUtils = require('./trainUtils.js')

naive.train = function(documents) {
    _.each(documents, function(item) {
                        if((item.hasOwnProperty('c')) === false) {
                            throw("Document missing class property 'c'")
                        } 
                        if((item.hasOwnProperty('d')) === false) {
                            throw ("Document missing document property 'd'")
                        }
                      });
    var classDistribution = trainUtils.documentTrainingClassDistribution(documents)
    return classDistribution
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


