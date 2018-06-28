import React, {Component} from 'react'
import Header from './Header'
import ButtonSearch from './ButtonSearch'
import Bookshelf from './Bookshelf'

class PageMain extends Component {

  render(){
    const groupedBooks = this.props.groupedBooks
    const shelfs = this.props.shelfs
    console.log("MAIN PAGE AGAIN", groupedBooks)

    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            {Object.keys(groupedBooks).map((shelf) => (
             	<Bookshelf 
                  key={shelf}
                  shelfs={shelfs}
                  shelfName={shelf}
                  books={groupedBooks[shelf]}
                  update={this.props.update}
                />
            ))}
          </div>
        </div>
        <ButtonSearch />
      </div>
    )
  }
}

export default PageMain