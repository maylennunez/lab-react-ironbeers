import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Header extends Component {



    render() {
        return (
            <div >
               <nav className="navbar navbar-light">
                <Link to='/'><i class="home">Home</i></Link>
                </nav>
            </div>
        );
    }
}

export default Header;