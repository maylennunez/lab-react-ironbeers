import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Beers from './component/beers';
import Newbeer from './component/newBeer';
import Homepage from './component/Homepage';
import RandomBeer from './component/randomBeer';
//mport Header from './component/Header';
import Singlebeer from './component/singlebeer'

class App extends Component {
  state = {
    allBeers: [],
  }

  componentDidMount() {

    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(allBeers => {
      console.log(allBeers)
      this.setState({
        allBeers: allBeers.data
      })
    })
  }

  showBeers = () => {
    return this.state.allBeers.map((eachBeer, i) => {
      return <div key={i}>
        <div className="beerDiv">
          <div className="beerImg">
            <img src={eachBeer.image_url} height="300" alt=" " />
          </div>
          <div className="beerStuff">
            <h4>{eachBeer.name}</h4>
            <Link to={`/beers/${eachBeer._id}`}> </Link>
            <h6>{eachBeer.tagline}</h6>
            {eachBeer.contributed_by}
          </div>
        </div>
      </div>
    })

  }

  render() {
    return (
      <div>

        {/* <nav className="navbar navbar-light"> */}
          <Link className="navbar-brand" to="/"><img src={"/images/logo.svg"} width="40" height="40" alt="" /></Link>
          {/* </nav> */}
          <Switch>
            <Route exact path="/" render={props => <Homepage {...props} />} />

            <Route exact path="/all-beers" render={props => <Beers {...props}
              showBeers={this.showBeers()} />} />
            <Route exact path="/beers/:singlebeerd" render={props => <Singlebeer {...props} />} />
            <Route exact path="/new" render={props => <Newbeer {...props} />} />
            <Route exact path="/randomBeer" render={props => <RandomBeer {...props} />} />

          </Switch>


       
      </div>
    );
  }
}

export default App;

