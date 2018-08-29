// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///ryans_reads'
    },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
