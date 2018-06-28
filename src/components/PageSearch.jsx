import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class PageSearch extends Component {
  
  state = {
  	query: ""
  }

  updateQuery = (query) => {
  	this.setState(() => ({
    	query: query
    }))
  }

  render(){
    console.log("SEARCH", this.props.books)
    const books = this.props.books
    const query = this.state.query
    
    Object.keys(books).map((key) => (console.log(books[key].title)))
    
    const showingBooks = query === ''
    	? ''
    	: Object.keys(books)
    		.filter((key) => (books[key].title == "The Linux Command Line" || books[key].title == "Needful Things"))
    		.reduce( (res, key) => (res[key] = books[key], res), {} )
    
    console.log("FILTERED", showingBooks)
    
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
            {Object.keys(showingBooks).map((b) => (
            	<Book 
                key={showingBooks[b].title}
                shelfs={this.props.shelfs}
                title={showingBooks[b].title}
                authors={showingBooks[b].authors}
                cover={showingBooks[b].imageLinks}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default PageSearch