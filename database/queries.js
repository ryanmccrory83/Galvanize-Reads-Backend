const database = require('./database-connection');

module.exports = {
//query for both author and books information//
    listAll(){
        return database('author_book')
        .join('book', 'book.id', '=', 'author_book.book_id')
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
        return database('book').select().where('id', id).first();
    },
    createBook(books){
        return database('book').insert(book).returning('*').then(record => record[0]);
    },
    updateBook(id, books){
        return database('book').update(book).where('id', id).returning('*').then(record => record[0]);
    },
    deleteBook(id){
        return database('book').delete().where('id', id);
    },
 //queries for Author information//   
    listAuthors(){
        return database('author')        
    },
    getAuthorById(){
        return database('author').select().where('id', id).first();
    },
    createAuthor(authors){
        return database('author').insert(author).returning('*').then(record => record[0]);
    },
    updateAuthor(id, authors){
        return database('author').update(author).where('id', id).returning('*').then(record => record[0]);
    },
    deleteAuthor(id){
        return database('author').delete().where('id', id);
}
};