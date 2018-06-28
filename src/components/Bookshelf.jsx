import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render(){
    const books = this.props.books
    const shelfs = this.props.shelfs
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Object.keys(books).map((key) => (
              <Book 
              key={key}
              shelfs={shelfs}
              book={books[key]}
              update={this.props.update}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf