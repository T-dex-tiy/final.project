import React, {Component} from 'react';
import Pic from '../PICS/MTBaction.jpg'

class Home extends Component{

  render(){
    return(
      <div className="PLP shop homeImage">
      <h2>Blasting into the Summer Berm</h2>
      <img className="headpic" src={Pic}></img>
      <p>Great Deals for all you outside action needs</p>
      </div>
    )
  }

}

module.exports = Home
