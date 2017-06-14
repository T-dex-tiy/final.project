import React, { Component } from 'react';

class ItemNav extends Component {

  render(){
    const {details} = this.props;
    
    return(
        <option className= "itemvalues">
          {details.size+ " " + details.color}
        </option>
    )
  }
}

module.exports = ItemNav
