exports.canary = function(test) {
    test.expect(1);
    test.ok(true, "This should always pass.");
    test.done();
};

exports["term extraction"] = {
    "extracts nothing for empty document set": function(test) {
        var naive = require('naive')
        test.deepEqual( naive.extractTerms([]), [])
        test.done();
    },
}