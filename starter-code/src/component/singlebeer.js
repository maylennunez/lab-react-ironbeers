import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'

class singlebeer extends Component {
state = {
singleBeer: {}
}

componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.singlebeerd}`).then(res => {
        console.log(this)
      this.setState({
        singleBeer:res.data
        
      })  
})
}



    render() {
        
        return (
            <div>
                  <nav className="navbar navbar-light"> </nav>
                <Header/>
               <br/> <img  alt= "singleB" src={this.state.singleBeer.image_url} />
               <br/> {this.state.singleBeer.name}
                {this.state.singleBeer.tagline}
              
              <br/> {this.state.singleBeer.first_brewed}
               <br/>{this.state.singleBeer.attenuation_level}
               <br/>{this.state.singleBeer.description}
               <br/><br/>{this.state.singleBeer.contributed_by}
            </div>
        );
    }
}

export default singlebeer;