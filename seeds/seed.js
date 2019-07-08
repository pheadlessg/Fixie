const ENV = process.env.NODE_ENV;
const { typeData, userData, objectsData } =
  ENV === 'test'
    ? require('../db/data/test-data/')
    : require('../db/data/development-data/');
// const {
//   makeRefObj,
//   formatArticles,
//   formatComments
// } = require('../utils/utils');

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('types').del(),
    knex('users').del(),
    knex('objects').del()
  ]).then(() =>
    knex('types')
      .insert(typeData)
      .then(() => knex('users').insert(userData))
      .then(() => knex('objects').insert(objectsData))
  );
};
