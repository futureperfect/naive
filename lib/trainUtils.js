var trainUtils = exports;

    tokenizer = require('./tokenizer.js')

trainUtils.extractVocabulary = function(documents) {
    return _.chain(documents).map(function(document) {
                                return tokenizer.tokenize(document.d)
                            }).flatten().union().value()
}

trainUtils.documentTrainingClassDistribution = function(trainingSet) {
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