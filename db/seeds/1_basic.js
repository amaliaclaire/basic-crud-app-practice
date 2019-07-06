
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('basic').del()
    .then(function () {
      // Inserts seed entries
      return knex('basic').insert([
        {
          id: 1,
          first_name: 'Weebee',
          last_name: 'Sparks'
        },
        {
          id: 2,
          first_name: 'Deebee',
          last_name: 'Sparks'
        },
        {
          id: 3,
          first_name: 'Sam',
          last_name: 'Sparks'
        },
        {
          id: 4,
          first_name: 'Dug',
          last_name: 'Komodo Dragon'
        },
        {
          id: 5,
          first_name: 'Ted',
          last_name: 'Teddy Bear'
        },
        {
          id: 6,
          first_name: 'Winston',
          last_name: 'Bunny'
        },
        {
          id: 7,
          first_name: 'Amalia',
          last_name: 'Fergin'
        },
      ]);
    });
};
