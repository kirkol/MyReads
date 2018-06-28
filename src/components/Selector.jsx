import React, {Component} from 'react'

class Selector extends Component {
  handleChange = (event) => {
    console.log("troooolo",event.target.value);
    console.log("jdwfwwef",this.props.book.shelf);
    this.props.update(this.props.book, event.target.value )
  }
  render(){
    const options = this.props.shelfs
    console.log("OPTIONS", options)
    console.log(this.props.book.shelf)
    
    options.map((option) => (
          	console.log("OPCJA",option)
    ))
    
    return(
      <div className="book-shelf-changer">
        <select onChange={(event)=>this.handleChange(event)} value="none">
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