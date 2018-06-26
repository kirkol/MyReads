import React from 'react'
import PageMain from './components/PageMain'
import PageSearch from './components/PageSearch'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'

const shelfs = ["Currently Reading", "Want to Read", "Read"]

class BooksApp extends React.Component {
  
  state = {
  	books: []
  }

  componentDidMount(){
    console.log("MOUNT")
	BooksAPI.getAll()
    .then((books) => {
    	this.setState(() => ({
          books
        }))
  	})
  }

  render() {
    console.log("RENDER APP",this.state.books)
    return (
      <div className="app">
      	<Route exact path='/' render={() => (
     	 <PageMain
      	  shelfs={shelfs}
		  books={this.state.books}
      	 />
    	)} />
        <Route path='/search' render={() => (
   		 <PageSearch />
    	)} />
      </div>
    )
  }
}

export default BooksApp
