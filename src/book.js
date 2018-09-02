import React, { Component } from 'react';

class Book extends Component{
    constructor(props){
        super(props);
        //bind the changeShelf function
        this.changeShelf = this.changeShelf.bind(this);
    };
    changeShelf(event){
        // function to check if shelf is different from current
        const { book } = this.props;
        if(book.shelf !== event.target.value){
            this.props.changeShelf(book,event.target.value);
        };
    };

    render(){
        const { book } = this.props;
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.previewLink})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.changeShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors?book.authors.map(name => name):null}</div>
                </div>
            </li>
        );
    };
};

export default Book;