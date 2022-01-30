import React, { Component } from 'react';

class Product extends Component {
   /* state = { 
        name: this.props.product.name,
        count: this.props.product.counter
        
        

     };*/


     getclasses() {
         return  this.props.product.counter === 0 ? "btn btn-outline-warning m-2": "btn btn-outline-primary m-2";
        };
    
    /*increment = () => {this.IncrementHandler(1500)}*/
     
    render() { 
        
        return ( <div className='row'>
            <div className='col-1'><span>{this.props.product.name}</span></div>
            <div className='col'><span className={this.getclasses()}>{this.props.product.counter}</span>
            <button onClick={() => this.props.onIncrement(this.props.product)} className='"btn btn-primary btn-lg .btn-lg"'>+</button>
            <span onClick={() => this.props.onDelete(this.props.product) } ><i className='fas fa-trash m-2'></i></span>
            </div>
            
            
            
           
        </div>);
    }
}
 
export default Product;