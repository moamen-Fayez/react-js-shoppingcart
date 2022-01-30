import React, { Component } from 'react';
import Navbar from './navbar';

import ShoppingCart from './shoppingCart';



class App extends Component {
    state = { 
        products: [ 
            { id:1 , name:"Burger" , counter: 0 },
            { id:2 , name:"Fries" , counter: 0 } ,
            { id:3 , name:"Cola" , counter: 0 }       
                   ]
                 
    };


    handelDelete = (product) => {
        //clone
        //edit
        const products = this.state.products.filter(p => p.id !== product.id);
        //setstat
        this.setState({ products });
    };


    handleReset = () => {
    //1 clone
    let products = [...this.state.products];
    //2 edit
    products = products.map(p => {
        p.counter = 0; 
        return p;
    })
    //3 Set state    
    this.setState({ products }) 
    };

    IncrementHandler = product => { 
     const products = [...this.state.products];
     const index = products.indexOf(product);
     products[index] = {...products[index]};
     products[index].counter++;
     this.setState({ products })

        
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar productsCount={this.state.products.filter(p => p.counter > 0).length} />
                <main className="container"> 
                  <ShoppingCart products={this.state.products} 
                onIncrement={this.IncrementHandler} onDelete={this.handelDelete} onReset={this.handleReset} /> </main>
            </React.Fragment>
        );
    }
}
 
export default App;