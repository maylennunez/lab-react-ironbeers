import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class randomBeer extends Component {

    state = {
        randomB: {},
        
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => {

            this.setState({
                randomB: res.data,
                

            })

        })
    }

    render() {
        console.log(this.state.randomB)
        return (

            <div>
                <Header/>
               <br/> <img alt="randb" src={this.state.randomB.image_url} />
               <br/> {this.state.randomB.name}
               <br/> {this.state.randomB.tagline}
               <br/> {this.state.randomB.first_brewed}
               <br/> {this.state.randomB.attenuation_level}
               <br/> {this.state.randomB.description}
               <br/> {this.state.randomB.contributed_by}

            </div>
        );
    }
}

export default randomBeer;