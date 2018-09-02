import React, {Component} from 'react';



class ListBooks extends Component{
    render(){
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
        ]
        const {books} = this.props
        return (
            <div className="list-books-content">
                {
                    shelves.map((shelf) => {
                        books.map(book=> {
                            if(shelf.value === book.shelf){
                                console.log(book.title)
                                console.log(book.shelf)
                                return(
                                    <div>
                                        book.title
                                        book.shelf
                                    </div>
                                )
                            }
                        })
                        
                    })
                }
            </div>
        )
    };
};

export default ListBooks;