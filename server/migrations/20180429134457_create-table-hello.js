
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hello',
    function (t) {
       t.increments('id').unsigned().primary();
       t.string('text').notNull();
   });
};

exports.down = function(knex, Promise) {
  return knex.dropTable('hello');
};
