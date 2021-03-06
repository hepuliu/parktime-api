
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', (table) => {
    table.string('dog_id').primary();
    table.text('dog_picture');
    table.string('dog_name');
    table.integer('dog_age');
    table.string('dog_breed');
    table.text('dog_description');
    table.string('owner_id').references('user_id').inTable('users');
    table.datetime('dog_deleted_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dogs');
};
