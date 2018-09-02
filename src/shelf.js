import React, { Component } from 'react';

import Book from './book';

class BookShelf extends Component{
    render () {
        const {books, catergory, changeShelf} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{catergory.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {   
                            books.map( book =>{
                                if(book.shelf === catergory.value){
                                    return(
                                        <Book 
                                            key={book.id} 
                                            book={book} 
                                            changeShelf={changeShelf}/>
                                    );
                                }return false;
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    };
};

export default BookShelf;