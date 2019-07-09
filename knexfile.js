module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/itmightbeinteresting',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/itmightbeinteresting',
  },
};