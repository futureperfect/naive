exports.canary = function(test) {
    test.expect(1);
    test.ok(true, "This should always pass.");
    test.done();
};

exports["vocabulary extraction"] = {
    "empty document set yields empty vocabulary": function(test) {
        var naive = require('naive')
        test.deepEqual( naive.extractVocabulary([]), [])
        test.done();
    },
    "terms are lowercase": function(test) {
        var naive = require('naive')
        test.deepEqual( naive.extractVocabulary(["This is", "Another document", "This is not"]), 
                        ["this", "is", "another", "document", "not"])
        test.done();
    },
    "extracts single document": function(test) {
        var naive = require('naive')
        test.deepEqual( naive.extractVocabulary(["This is"]), 
                        ["this", "is"])
        test.done();
    },
    "extracts multiple documents": function(test) {
        var naive = require('naive')
        test.deepEqual( naive.extractVocabulary(["This is", "Another document", "This is not"]), 
                        ["this", "is", "another", "document", "not"])
        test.done();
    }
}