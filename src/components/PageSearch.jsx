import React, {Component} from 'react'

class PageSearch extends Component {

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
               TUTAJ JAKIES RZECZY Z BOOKS.API (PATRZ ORYGINAŁ PLIKU)
                */}
            <input type="text" placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default PageSearch