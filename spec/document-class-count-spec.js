var vows = require('vows'),
    assert = require('assert');
    _ = require('underscore')
    trainUtils = require('../lib/trainUtils.js')

var trainingSet = [
    {c:"cat", d:"This is a training document."},
    {c:"dog", d:"Another training document."},
    {c:"cat", d:"Yet another training document."},
    {c:"human", d:"Stuff. More stuff"},
    {c:"human", d:"How does it feel to get kicked in the face?"},
    {c:"human", d:"Pretty ok, honestly."}
]

vows.describe('training class distribution').addBatch({
    'when generating document class distribution for empty training set': {
        topic: trainUtils.documentTrainingClassDistribution([]),
        'an empty class distribution is returned': function(classDistribution) {
            assert.isObject(classDistribution)
            assert.isEmpty(classDistribution)
        }
    },
    'when generating document class distribution for non-empty training set': {
        topic: trainUtils.documentTrainingClassDistribution(trainingSet),
        'a training set distribution is returned': function(classDistribution) {
            _.each(classDistribution, function(value, key) { assert.isNumber(value)})
            assert.isTrue(_(classDistribution).keys().length === 3)
        },
        'the correct classes set is returned': function(classDistribution) {
            assert.isObject(classDistribution)
            assert.include(classDistribution, "cat")
            assert.include(classDistribution, "dog")
            assert.include(classDistribution, "human")
            assert.equal(_.keys(classDistribution).length, 3)
        },
        'the correct frequency count distribution is returned': function(classDistribution) {
             assert.strictEqual(classDistribution.cat, 2)
             assert.strictEqual(classDistribution.dog, 1)
             assert.strictEqual(classDistribution.human, 3)
        }
    }
}).export(module)