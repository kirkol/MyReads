import React from 'react'
import Selector from './Selector'

function Book(props) {
    return(
      <div className="book">
        <div className="book-top">
          {(props.book.imageLinks)
          ?(
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
          ):(
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url()` }}></div>
          )}
          <Selector 
            shelfs={props.shelfs}
            update={props.update}
            book={props.book}
            />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    )
}

export default Book