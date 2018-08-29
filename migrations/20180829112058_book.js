exports.up = function(knex, Promise) {
    return knex.schema.createTable("book", (table) => {
        table.increments();
        table.text("title");
        table.text("genre");
        table.text("description",1000);
        table.string("cover_url");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("book");
};

