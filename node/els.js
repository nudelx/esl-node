const elasticsearch = require('elasticsearch')

class ElsConnectionPool extends elasticsearch.ConnectionPool {
  markAlive(connection) {
    super.markAlive(connection)
  }
}

const els = {
  els: new elasticsearch.Client({
    // ConnectionPool: ElsConnectionPool,
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '5.6'
  }),

  search: async function(query) {
    return this.els.search(query)
  }
}

module.exports = els
