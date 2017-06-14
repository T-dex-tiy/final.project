import React, {Component} from 'react';
import Shirt1 from '../PICS/products/Blank1.png';
import Shirt2 from '../PICS/products/Blank2.png';
import sampleShirts from '../items/shirts'
import ItemNav from '../headcomponents/itemNav'

class Product extends Component{
  constructor(props){
    super(props);
    this.updatedCart = this.updatedCart.bind(this)
  }

  updatedCart(){
    const updatedCart ={
      item: this.ref.details
    }
    event.preventDefault()

    this.props.newCart(updatedCart)

    document.querySelector('#item').value=""
  }

  render(){
    return(
      <div className="PLP">
      <h1>{this.props.items.shirt1.item}</h1>
      <img className="productDisplay" src={Shirt2}></img>
        <div className="page_item">
        </div>
        <div className = "Product-Details">
          <div className="PLPmenu">
            <select id="item" ref = "item" className="Letstrythis" cart={this.props.cart}>
            {
              Object
              .keys(this.props.items)
              .map(key =>{
                return <ItemNav key={key} index={key} details={this.props.items[key]}
                  />})

            }
          </select>

          </div>
        </div>
      </div>
    )
  }

}

module.exports = Product
