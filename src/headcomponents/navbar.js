import React, {Component} from 'react'

class Nav extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="list-items">
        <div className="button mens"
          onClick={(event) => { this.props.eventEmitter.emit("navigateLandingPage", {Page: 1}) }}><p>Mens</p></div>
        <div className="button womens" onClick={(event) => { this.props.eventEmitter.emit("navigateLandingPage", {Page: 1}) }}><p>Womens</p></div>
        <div className="button kids" onClick={(event) => { this.props.eventEmitter.emit("navigateLandingPage", {Page: 1}) }}><p>Kids</p></div>
        <div className="button sports" onClick={(event) => { this.props.eventEmitter.emit("navigateLandingPage", {Page: 2})
          {this.props.loadShirts}}
        }><p>Activity</p></div>
      </div>
    )
  }
}
module.exports = Nav
