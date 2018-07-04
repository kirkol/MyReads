import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class PageSearch extends Component {
  
  state = {
  	query: "",
    result: []
  }

updateQuery = (query) => {
	this.setState({
    	query: query
    }, () => BooksAPI.search(query, 30).then((booksResult) => {
    	if(!!booksResult){
        	if(booksResult.length>0){
              const results = booksResult.map((book) => {
                this.props.books.some((b) => {
                	if(b.id === book.id){
                    	book.shelf = b.shelf
                      	return true
                    }else{
                    	book.shelf = "none"
                      	return false
                    }
                })
                return book
              });
              this.setState(() => ({result: results}))
            }
        }
    }))
}

  update = (book, shelf) => {
	BooksAPI.update(book, shelf)
}

  render(){
    const books = this.props.books
    const query = this.state.query
        
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.result.map((book) =>
              <Book
               key={book.id}
               shelfs={this.props.shelfs}
               title={book.title}
               authors={book.authors}
               book={book}
               update={this.props.update}
              />                      
              )}
          </ol>
        </div>
      </div>
    )
  }
}

export default PageSearch