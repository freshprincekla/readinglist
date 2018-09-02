import React from 'react';
import { Route, BrowserRouter, Switch , Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import './App.css';

import Search from './search';
import ListBooks from './listBooks';


class BooksApp extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        books: []
      };
      this.changeShelf = this.changeShelf.bind(this)
  }
  
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  };

  changeShelf(nbook, shelf){
    BooksAPI.update(nbook, shelf).then(res => {
      nbook.shelf = shelf;
      //console.log(this.state)
      let books = this.state.books.filter( bookitem => bookitem.id !== nbook.id)
      books.push(nbook)
      this.setState({books})

    });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <ListBooks 
                  books={this.state.books}
                  changeShelf ={this.changeShelf}
                />
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )} />
            <Route path="/search" component={Search}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
};

export default BooksApp;
