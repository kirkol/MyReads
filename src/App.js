import React from 'react'
import PageMain from './components/PageMain'
import PageSearch from './components/PageSearch'
import {Route} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

const shelfs = ["Currently Reading", "Want to Read", "Read"]

class BooksApp extends React.Component {

  state = {
    books: [],
    groupedBooks: []
  }

componentWillMount(){
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

//funkcja = () => {
//	this.setState({
//      	books: {"dupa":"aaa"},
//		groupedBooks: ["abc", "cde"]
//	})
//  console.log("NACISKAM FUNKCJE")
//}

componentWillUpdate(){
	this.groupBooks(this.state.books)
    const bookGouped = this.groupBooks(this.state.books)
  	this.setState(() => ({
    groupedBooks: bookGouped
  }))
}

groupBooks(books){
  if(books){
    let bookArray = {};
    console.log(books)
    console.log("ROBI SIE GROUPING")
    Object.keys(books).map((key) => {
   		console.log(books[key])
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
  return (
  <div className="app">
   <Route exact path='/' render={() => (
    <PageMain
    shelfs={shelfs}
    books={this.state.books}
	groupedBooks={this.state.groupedBooks}
	funkcja={this.funkcja}
    />
   )} />
   <Route path='/search' render={() => (
   	<PageSearch />
   )} />
</div>
)}}

export default BooksApp
