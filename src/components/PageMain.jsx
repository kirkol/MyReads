import React, {Component} from 'react'
import Header from './Header'
import ButtonSearch from './ButtonSearch'
import Bookshelf from './Bookshelf'

class PageMain extends Component {
  
  constructor(props){
    super(props);
    console.log("PROPSY W KONSTRUKTORZE",props)
  	this.findBooksForShelf(props);
  }
  
  findBooksForShelf(books){
    console.log("FIND",books)
  	return 
  }

  render(){
    const shelfs = this.props.shelfs;

    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            {this.props.shelfs.map((shelf) => (
            	<Bookshelf key={shelf} shelfName={shelf} shelfs={shelfs}/>
            ))}
          </div>
        </div>
        <ButtonSearch />
      </div>
    )
  }
}

export default PageMain