exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table) => {
        table.increments();
        table.text("book_title");
        table.text("book_genre");
        table.text("book_description",1000);
        table.string("book_cover_url");
        table.integer("authorId1");
        table.integer("authorId2");
        table.integer("authorId3");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("books");
};

