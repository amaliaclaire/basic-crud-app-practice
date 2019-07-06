
exports.up = (knex, Promise) => {
  return knex.schema.createTable('basic',  (table) => {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('basic')
}
