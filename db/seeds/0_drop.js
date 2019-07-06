exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('basic').del()
    .then(function () {
      return knex('basic').del()
    })
};
