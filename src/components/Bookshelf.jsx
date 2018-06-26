import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book shelfs={this.props.shelfs}/>
           	<Book shelfs={this.props.shelfs}/>
            <Book shelfs={this.props.shelfs}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf