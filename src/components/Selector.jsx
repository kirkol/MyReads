import React, {Component} from 'react'

class Selector extends Component {
  handleChange = (event) => {
    this.props.update(this.props.book, event.target.value )
  }
  render(){
    const options = this.props.shelfs
    return(
      <div className="book-shelf-changer">
        <select onChange={(event)=>this.handleChange(event)} value={(this.props.book.shelf)?(this.props.book.shelf):("move")}>
          <option value="move" disabled>Move to...</option>
          {options.map((option) => (
          	<option key={option.replace(/\s+/g, '')} value={option.replace(/\s+/g, '')} >{option}</option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Selector