// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///galvanize_reads'
    },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
