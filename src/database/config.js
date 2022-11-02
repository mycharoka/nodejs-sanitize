const {Pool} = require('pg')

const pool = new Pool({
  user: "vidi",
  password: "vidi",
  host: "localhost",
  database: "dbtes",
  port: 5432
})

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(`database error : ${err}`)
  }
  console.info(`database connected`)
})

function cleanup () {
  pool.end(() => {
    console.info('pool has ended')
  })
}

module.exports = {
  pool,
  cleanup
}