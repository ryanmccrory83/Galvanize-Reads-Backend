const database = require('./database-connection');

module.exports = {
    listBooks() {
        return database('books')
        .leftOuterJoin('authors as au1', 'books.authorId1', '=', 'au1.id')
        .leftOuterJoin('authors as au2', 'books.authorId2', '=', 'au2.id')
        .leftOuterJoin('authors as au3', 'books.authorId3', '=', 'au3.id')
        .select({
            book_title: 'books.book_title',
            book_genre: 'books.book_genre',
            book_description: 'books.book_description',
            book_cover_url: 'books.book_cover_url',
            author1FirstName: 'au1.first_name',
            author1LastName: 'au1.last_name',
            author2FirstName: 'au2.first_name',
            author2LastName: 'au2.last_name',
            author3FirstName: 'au3.first_name',
            author3LastName: 'au3.last_name',
        });
    },
    getBookById(){
        return database('books').select().where('id', id).first();
    },
    createBook(books){
        return database('books').insert(books).returning('*').then(record => record[0]);
    },
    updateBook(id, books){
        return database('books').update(books).where('id', id).returning('*').then(record => record[0]);
    },
    deleteBook(id){
        return database('books').delete().where('id', id);
    },
    listAuthors(){
        return database('authors')
        .leftJoin('books as b1', 'authors.id', '=', 'b1.author1Id')
        .leftJoin('books as b2', 'authors.id', '=', 'b2.author1Id')
        .leftJoin('books as b2', 'authors.id', '=', 'b3.author1Id')
        .select({
            firstName: 'authors.first_name',
            lastName: 'authors.last_name',
            biography: 'authors.biography',
            portrait: 'authors.portrait_url',
            books: 'b1.book_title',
            books2: 'b2.book_title',
            books3: 'b3.book_title'
        });
    },
    getAuthorById(){
        return database('authors').select().where('id', id).first();
    },
    createAuthor(authors){
        return database('authors').insert(authors).returning('*').then(record => record[0]);
    },
    updateAuthor(id, authors){
        return database('authors').update(authors).where('id', id).returning('*').then(record => record[0]);
    },
    deleteAuthor(id){
        return database('authors').delete().where('id', id);
    }
};