
exports.up = function(knex, Promise) {
    return knex.schema.createTable('author', (table) => {
        table.increments();
        table.text('first_name');
        table.text('last_name');
        table.text('biography',1000);
        table.string('portrait_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author');
};

