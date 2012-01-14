var vows = require('vows'),
    assert = require('assert');

var naive = require('naive');

vows.describe('vocabulary extraction').addBatch({
    'when extracting text from an empty document set': {
            topic: require('naive').extractVocabulary([]),
            'we get an empty term list': function (termList) {
                assert.deepEqual(termList, []);
            }
    },
    'when extracting text from a single document': {
            topic: require('naive').extractVocabulary(["This is is Is"]),
            'all terms are lowercase': function(termList) {
                assert.equal(_.all(termList, function(item) { return item === item.toLowerCase(); }), true)
            },
            'the correct collection of terms is returned': function (termList) {
                assert.deepEqual(_.difference(["this", "is"], termList), [])
                assert.deepEqual(_.difference(termList, ["this", "is"]), [])
                assert.deepEqual(_.union(_.difference(["this", "is"], termList),
                                         _.difference(termList, ["this", "is"])), [])
            },
    },
    'when extracting text from multiple documents': {
        topic: require('naive').extractVocabulary(["This is", "Another document", "This is not"]),
        'all terms are lowercase': function(termList) {
            assert.equal(_.all(termList, function(item) { return item === item.toLowerCase(); }), true)
        },
        'the correct collection of terms is returned': function (termList) {
            assert.deepEqual(_.difference(["this", "is", "another", "document", "not"], termList), [])
            assert.deepEqual(_.difference(termList, ["this", "is", "another", "document", "not"]), [])
            assert.deepEqual(_.union(_.difference(["this", "is", "another", "document", "not"], termList),
                                     _.difference(termList, ["this", "is", "another", "document", "not"])), [])
        },
    }
}).export(module)
