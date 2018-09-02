import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Book from './book';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            message: "Please search a valid search term."
        };
        this.searchTerms = this.searchTerms.bind(this);
    };
    
    searchTerms(event){
        if(event.target.value){
            BooksAPI.search(event.target.value.trim()).then(books=>{
                if(!books || books.error){
                    this.setState({
                        books:[],
                        message: "Oops not found"
                    });
                };
                if(books.length > 0){
                    this.setState({
                        books,
                        message:""
                    });
                };
            });
        };
    };

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={this.searchTerms} placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.books.map(book =>{
                            return(
                                <Book 
                                    key={book.id} 
                                    book={book} 
                                    changeShelf={this.props.changeShelf}/>
                            );
                        })
                    }
                    {this.state.message}
                </ol>
            </div>
          </div>
        );
    };
};

export default Search;