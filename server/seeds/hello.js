
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hello').del()
    .then(function () {
      // Inserts seed entries
      return knex('hello').insert([
        {id: 1, text: 'hello this is a test'}
      ]);
    });
};
