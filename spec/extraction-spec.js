var vows = require('vows'),
    assert = require('assert');

var naive = require('naive');

var trainingSet = [
    {c:"cat", d:"I like to meow."},
    {c:"dog", d:"Sometimes, I like to woof."},
    {c:"cat", d:"More of a purrer, here."},
    {c:"human", d:"Stuff. More stuff."},
    {c:"human", d:"How does it feel to get kicked in the face?"},
    {c:"human", d:"Pretty ok, honestly."},
    {c:"robot", d:"Destroy the brutes.23523523ibewksdlgkhsdgpwe4789t235y3"}
]

var expectedTermList = [ 'i', 'like', 'to', 'meow.', 'sometimes,', 'woof.', 'more', 'of', 'a',
                         'purrer,', 'here.', 'stuff.', 'how', 'does', 'it', 'feel',
                         'get', 'kicked', 'in', 'the', 'face?', 'pretty', 'ok,', 'honestly.', 'destroy', 
                         'brutes.23523523ibewksdlgkhsdgpwe4789t235y3' ]

vows.describe('vocabulary extraction').addBatch({
    'when extracting text from an empty document set': {
            topic: require('naive').extractVocabulary([]),
            'we get an empty term list': function (termList) {
                assert.deepEqual(termList, []);
            }
    },
    'when extracting text from a single document': {
            topic: require('naive').extractVocabulary([{c:"foo", d:"This is is Is"}]),
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
        topic: require('naive').extractVocabulary(trainingSet),
        'all terms are lowercase': function(termList) {
            assert.equal(_.all(termList, function(item) { return item === item.toLowerCase(); }), true)
        },
        'the correct collection of terms is returned': function (termList) {
            assert.deepEqual(_.difference(expectedTermList, termList), [])
            assert.deepEqual(_.difference(termList, expectedTermList), [])
            assert.deepEqual(_.union(_.difference(expectedTermList, termList),
                                     _.difference(termList, expectedTermList)), [])
        },
    }
}).export(module)
