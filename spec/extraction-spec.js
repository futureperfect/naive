var vows = require('vows'),
    assert = require('assert');

var naive = require('naive');

var trainingSet = [
    {c:"cat", d:"I like to meow."},
    {c:"dog", d:"Sometimes, I like to woof."},
    {c:"cat", d:"More of a purrer, here."},
    {c:"human", d:"Stuff.\n More stuff."},
    {c:"human", d:"How does it feel to get kicked in the face?"},
    {c:"human", d:"Pretty ok, honestly."},
    {c:"robot", d:"Destroy the brutes.23523523ibewksdlgkhsdgpwe4789t235y3"}
]

var expectedTermList = [ 'i', 'like', 'to', 'meow', 'sometimes', 'woof', 'more', 'of', 'a',
                         'purrer', 'here', 'stuff', 'how', 'does', 'it', 'feel',
                         'get', 'kicked', 'in', 'the', 'face', 'pretty', 'ok', 'honestly', 'destroy', 
                         'brutes', '23523523ibewksdlgkhsdgpwe4789t235y3' ]

vows.describe('vocabulary extraction').addBatch({
    'when extracting text from an empty document set': {
            topic: require('naive').extractVocabulary([]),
            'we get an empty term list': function (termList) {
                assert.isArray(termList)
                assert.isEmpty(termList)
            }
    },
    'when extracting text from a training set': {
        topic: require('naive').extractVocabulary(trainingSet),
        'all terms are lowercase': function(termList) {
            assert.equal(_.all(termList, function(item) { return item === item.toLowerCase(); }), true)
        },
        'only characters A-Za-z0-9_ are used in terms': function(termList) {
            var re = /\W+/
            assert.equal(_(termList).any(function(term) { return re.test(term) }), false)
        },
        'the correct collection of terms is returned': function (termList) {
            assert.deepEqual(_.difference(termList, expectedTermList), [])
            assert.deepEqual(_.difference(expectedTermList, termList), [])
            assert.deepEqual(_.union(_.difference(expectedTermList, termList),
                                     _.difference(termList, expectedTermList)), [])
        }
    }
}).export(module)
