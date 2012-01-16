var trainUtils = exports;

trainUtils.extractVocabulary = function(documents) {
    var re = /\W+/g;
    return _.chain(documents).map(function(document) {
                                var terms = document["d"].replace(re, " ").split(/\s+/g);
                                terms = _.filter(terms, function(term) { return term.length > 0})
                                return _(terms).map(function(term) {
                                                        return term.toLowerCase();
                                                    })
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