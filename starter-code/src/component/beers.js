import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import Header from './Header';



class beers extends Component {

    
    render() {
        return (
            <div>
                <Header/>
                {this.props.showBeers}
                
            </div>
        );
    }
}

export default beers;