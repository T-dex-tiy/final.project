import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Landing_Pages/homePage';
import Product from './Landing_Pages/mainContent';
import Cart from './Landing_Pages/checkOut';
import Nav from './headcomponents/navbar.js';
import { EventEmitter } from 'events';
import sampleShirts from './items/shirts';
import base from './base';
import Logo from './PICS/gears.png'
import './styles/app.css';


class App extends Component{
  constructor(){
    super()

    this.addtoCart = this.addtoCart.bind(this);


    this.state = {
      Page: 2,
      items:{},
      cart:{},
    }
  }

  componentWillMount() {
    let shirts;
      this.setState({
        items: sampleShirts,
      });

    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateLandingPage", ({Page}) => {
      this.userScreen({newLandingPage: Page})
      console.log(Page);
    });

  }


  addtoCart(key){
    const cart = {...this.state.cart};
    cart[key]=cart[key] + 1 || 1;
    this.setState({cart});
  }
  userScreen({newLandingPage}){
    this.setState({Page: newLandingPage})
    console.log(newLandingPage);
  }




  render(){

    var currentScreen

      if(this.state.Page===1){
        currentScreen = <Home/>
        console.log("Went Home");
      }

      if(this.state.Page===2){ console.log(this.state);
        currentScreen = <Product items={this.state.items}  cart={this.state.cart}
        newCart ={this.addtoCart.bind(this)} />
        console.log("Went product");
      }

      // if(this.state.Page===3){
      //   currentScreen = <Cart cart={this.state.cart}/>
      //   console.log("Went Cart");
      // }

    return(
    <div className="app">
      <div className="header-nav-bar">
        <div className="topHeadBar">
        </div>
        <img  src= {Logo} className="logo" />
          <div className="list-items">
            <Nav eventEmitter={this.eventEmitter}
              landingPage={this.state.Page} />
          </div>
      </div>
      <div className="app-wrapper">
        <div className="item-landing-page shop"
          >
          {currentScreen}
        </div>
      </div>
      <div className="footer-content"><p>You move, People get hurt</p></div>
    </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
