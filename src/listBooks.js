import React, {Component} from 'react';

import BookShelf from './shelf';

class ListBooks extends Component{
    render(){
        // the various shelves and their value
        const shelves = [
            {
                value: 'currentlyReading', 
                title:'Currently Reading'
            },
            {
                value: 'wantToRead',
                title: 'Want to Read'
            },
            {
                value: 'read',
                title: 'Read'
            }
        ];
        const {books, changeShelf} = this.props
        return (
            <div className="list-books-content">
                {shelves.map((shelf) => <BookShelf 
                                            key={shelf.value} 
                                            catergory={shelf} 
                                            books={books}
                                            changeShelf={changeShelf}/>)}
            </div>
        );
    };
};

export default ListBooks;