import React from 'react'
import PageMain from './components/PageMain'
import PageSearch from './components/PageSearch'
import {Switch, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

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
  });
}

//update = (book, shelf) => {
//	BooksAPI.update(book, shelf)
//  	.then((res) => {
//      this.getAll()
//    })
//}

update = (book, shelf) => {
  console.log("robie update")
  console.log("book", book)
  console.log("shelf", shelf)
  BooksAPI.update(book, shelf).then(() => {
    book.shelf = shelf  
    // bezpieczne uzycie setState dwa razy pod rzad (callback)
    this.setState
    (state => ({
      books: state.books.filter(b => b.id !== book.id).concat(book)
    })
     , this.setState
    (state => ({
      groupedBooks: this.groupBooks(state.books)
    })))  
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
        }else if(books[key].shelf === "none"){
          //nic nie rob
        }else{
          bookArray[books[key].shelf] = [books[key]]
        }
	});
    return bookArray;
  }
}

render() {
  console.log("GROUPED", this.state.groupedBooks)
  return (
  <div className="app">
   <Switch>
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
      update={this.update}
      />
     )} />
</Switch>
</div>
)}}

export default BooksApp
