const database = require('./database-connection');

module.exports = {
//query for both author and books information//
    listAll(){
        return database('author_book')
        .join('book', 'book.id', '=', 'author_book.bood_id')
        .join('author', 'author.id', '=', 'author_book.author_id')
        .select('book_author.book_id',
                'book_author.author_id',
                'book.title',
                'book.genre',
                'book.description',
                'book.cover_url',
                'author.first_name',
                'author.last_name',
                'author.biography',
                'author.portrait_url'
                );
    },
//queries for books information//    
    listBooks() {
        return database('book')
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
 //queries for Author information//   
    listAuthors(){
        return database('author')        
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