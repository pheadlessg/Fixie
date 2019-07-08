const { DB_URL } = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'fixiedb'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test_fixiedb'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: `${DB_URL}?ssl=true`,
    migrations: {
      directory: './db/migrations/'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
