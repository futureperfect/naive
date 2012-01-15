var vows = require('vows'),
    assert = require('assert');

var naive = require('naive');

var missingClassSet = [
    {d:"This document is missing a class"}
]

var missingDocumentSet = [
    {c:"missing document"}
]

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
        topic: require('naive').documentTrainingClassDistribution([]),
        'an empty document count is returned': function (classDistribution) {
            assert.isNumber(classDistribution.count)
            assert.equal(classDistribution.count === 0, true)
        },
        'an empty class distribution is returned': function(classDistribution) {
            assert.isObject(classDistribution.distribution)
            assert.isEmpty(classDistribution.distribution)
        }
    },
    'when generating document class distributions from a document missing a class label': {
        topic: function() {
            require('naive').documentTrainingClassDistribution(missingClassSet)
        },
        'an exception is raised': function (exception) {
            assert.equal(exception, "Document missing class property 'c'")
        }
    },
    'when generating document class distributions from a document missing a document label': {
        topic: function() {
            require('naive').documentTrainingClassDistribution(missingDocumentSet)
        },
        'an exception is raised': function (exception) {
            assert.equal(exception, "Document missing document property 'd'")
        }
    },
    'when generating document class distribution for non-empty training set': {
        topic: require('naive').documentTrainingClassDistribution(trainingSet),
        'a training set size is returned': function(classDistribution) {
            assert.include(classDistribution, "count")
            assert.isNumber(classDistribution.count)
        },
        'a training set distribution is returned': function(classDistribution) {
            assert.isObject(classDistribution)
            assert.include(classDistribution, "distribution")
        },
        'the correct classes set is returned': function(classDistribution) {
            assert.include(classDistribution.distribution, "cat")
            assert.include(classDistribution.distribution, "dog")
            assert.include(classDistribution.distribution, "human")
        },
        'the correct frequency count distribution is returned': function(classDistribution) {
             assert.isNumber(classDistribution.distribution.cat)
             assert.isNumber(classDistribution.distribution.dog)
             assert.isNumber(classDistribution.distribution.human)
             assert.equal(classDistribution.distribution.cat, 2)
             assert.equal(classDistribution.distribution.dog, 1)
             assert.equal(classDistribution.distribution.human, 3)
        }
    }
}).export(module)