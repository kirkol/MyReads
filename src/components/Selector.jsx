import React, {Component} from 'react'

class Selector extends Component {
  render(){
    const options = this.props.shelfs
    return(
      <div className="book-shelf-changer">
        <select>
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