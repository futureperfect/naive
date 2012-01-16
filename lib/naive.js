var naive = exports;
    _ = require('underscore')
    trainUtils = require('./trainUtils.js')

naive.train = function(documents) {
    _.each(documents, function(document) {
                        if((document.hasOwnProperty('c')) === false) {
                            throw("Document missing class property 'c'")
                        } 
                        if((document.hasOwnProperty('d')) === false) {
                            throw ("Document missing document property 'd'")
                        }
                      });
    var classDistribution = trainUtils.documentTrainingClassDistribution(documents)
    return {
        "classDistribution": classDistribution,
        "classCount": _(classDistribution).keys().length,
        "vocabulary": ["Stuff", "things", "nonsense"],
        "prior": [],
        "conditionalPrior": []
    }
}

naive.apply = function() {
    function extractTokensFromDocument(vocabulary, document) {
        console.log("Extracting tokens from document not yet implemented");
    }
    extractTokensFromDocument()
}


