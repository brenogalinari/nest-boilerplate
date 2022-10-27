module.exports = {
  development: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest_learning',
  },
  test: {
    dialect: 'mysql',
    host: 'localhost',
    port: 5432,
    username: 'roku',
    password: 'roku',
    database: 'test',
  },
  production: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roku',
    password: 'roku',
    database: 'prod',
  },
};