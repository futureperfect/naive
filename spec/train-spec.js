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
    'when training on a corpus containing a document with a missing class label': {
        topic: function() {
            require('naive').train(missingClassSet)
        },
        'an exception describing the error is raised': function (exception) {
            assert.equal(exception, "Document missing class property 'c'")
        }
    },
    'when training on a corpus containing a document with a missing document label': {
        topic: function() {
            require('naive').train(missingDocumentSet)
        },
        'an exception describing the error is raised': function (exception) {
            assert.equal(exception, "Document missing document property 'd'")
        }
    },
}).export(module)
