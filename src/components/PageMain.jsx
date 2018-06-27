import React, {Component} from 'react'
import Header from './Header'
import ButtonSearch from './ButtonSearch'
import Bookshelf from './Bookshelf'

class PageMain extends Component {

  render(){
    const shelfs = this.props.shelfs;
    console.log("RENDERUJE SIE PAGEMAIN", this.props.books)

    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <button onClick={this.props.funkcja}>KLIKNIJ</button>
          <div>
            {this.props.shelfs.map((shelf) => (
            	<Bookshelf
                  key={shelf}
                  shelfName={shelf}
                  shelfs={shelfs}
                  groupedBooks={this.props.groupedBooks}/>
            ))}
          </div>
        </div>
        <ButtonSearch />
      </div>
    )
  }
}

export default PageMain