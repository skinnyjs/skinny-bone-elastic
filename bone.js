"use strict";

var elasticsearch = require('elasticsearch');

module.exports = function attachElastic(skinny, options) {
    // See options at http://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html
    skinny.elastic = new elasticsearch.Client(options);
};