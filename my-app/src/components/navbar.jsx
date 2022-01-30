import React from 'react';

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <a className="navbar-brand m-2" href="#">number of items:</a>
            
             <span className='btn btn-primary'>{props.productsCount}</span>
        </nav>
     );
}
 
export default NavBar;

