import React from 'react'
import PageMain from './components/PageMain'
import PageSearch from './components/PageSearch'
import {Route} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

const shelfs = ["currentlyReading", "wantToRead", "read"]

class BooksApp extends React.Component {

  state = {
    books: [],
    groupedBooks: []
  }

componentWillMount(){
	this.getAll()
}

getAll(){
  BooksAPI.getAll()
    .then((books) => {
    const bookGouped = this.groupBooks(books)
    this.setState(() => ({
    books: books,
    groupedBooks: bookGouped
  }))
  console.log("API",this.state);
  });
}

update = (book, shelf) => {
	BooksAPI.update(book, shelf)
  	.then((res) => {
      this.getAll()
    })
}

groupBooks(books){
  if(books){
    let bookArray = {};
    Object.keys(books).map((key) => {
      //jezeli bookArray ma juz taki klucz, to ksiazka (obiekt) zostanie dodana do ciagu ksiazek
      //jesli nie, to zostanie utworzony taki klucz z wartoscia tej ksiazki
      	if(bookArray.hasOwnProperty(books[key].shelf)){
          //sprawdz dlugosc ciagu w obiekcie = bookArray[books[key].shelf].length
          bookArray[books[key].shelf][bookArray[books[key].shelf].length] = books[key]
        }else{
          bookArray[books[key].shelf] = [books[key]]
        }
	});
    console.log("BOOK ARRAY", bookArray)
    return bookArray;
  }
  
}

render() {
  console.log("RENDERUJE APA!")
  return (
  <div className="app">
   <Route exact path='/' render={() => (
    <PageMain
    shelfs={shelfs}
	groupedBooks={this.state.groupedBooks}
	update={this.update}
    />
   )} />
   <Route path='/search' render={() => (
   	<PageSearch
    shelfs={shelfs}
    books={this.state.books}
    />
   )} />
</div>
)}}

export default BooksApp
