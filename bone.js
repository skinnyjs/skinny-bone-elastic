var elasticsearch = require('elasticsearch');

module.exports = function attachMongo(skinny, options) {
    "use strict";

    // See options at http://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html
    skinny.elastic = new elasticsearch.Client(options);
};