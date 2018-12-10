import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import Book from "./book";

class Search extends Component {
  constructor(props) {
    super(props);
    // set initial state and message to help users
    this.state = {
      books: [],
      message: "Please search a valid search term."
    };
    this.searchTerms = this.searchTerms.bind(this);
  }

  searchTerms(event) {
    // function that search for books and handles errors
    if (event.target.value) {
      BooksAPI.search(event.target.value.trim()).then(books => {
        if (!books || books.error) {
          this.setState({
            books: [],
            message: "Oops not found"
          });
        }
        if (books.length > 0) {
          this.setState({
            books,
            message: ""
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.searchTerms}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  changeShelf={this.props.changeShelf}
                />
              );
            })}
            {
              // added a mesage to help user know what to do
              this.state.message
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
