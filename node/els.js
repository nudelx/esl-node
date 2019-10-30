const elasticsearch = require('elasticsearch')

const els = {
  els: new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '5.6'
  }),

  search: async function(query) {
    return this.els.search(query)
  }
}

module.exports = els
