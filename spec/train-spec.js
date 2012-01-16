var vows = require('vows'),
    assert = require('assert');

var naive = require('naive');

var missingClassSet = [
    {d:"This document is missing a class"}
]

var missingDocumentSet = [
    {c:"missing document"}
]

vows.describe('train').addBatch({
    'when a document in the corpus is missing a class label': {
        topic: function() {
            require('naive').train(missingClassSet)
        },
        'an exception describing the error is raised': function (exception) {
            assert.equal(exception, "Document missing class property 'c'")
        }
    },
    'when generating document class distributions from a document missing a document label': {
        topic: function() {
            require('naive').train(missingDocumentSet)
        },
        'an exception describing the error is raised': function (exception) {
            assert.equal(exception, "Document missing document property 'd'")
        }
    },
}).export(module)
