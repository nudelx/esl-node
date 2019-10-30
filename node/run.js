const els = require('./els')

const run = async function() {
  const query = {
    index: 'shakespeare',
    body: {
      query: { match_phrase: { text_entry: 'to be or not to be' } }
    }
  }
  try {
    const resp = await els.search(query)

    resp.hits.hits.forEach(d => console.log('data:', d))
  } catch (error) {
    console.trace(error.message)
  }
}

const a = setInterval(run, 300)
