
import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';


class newBeer extends Component {
state={
    
}
 
 addNewBeer = (event) => {
 event.preventDefault()
 console.log(this.state)

 axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then(res => {

    console.log(res)
 })

}
handleChange = (event) => {
console.log(event.target.name, event.target.value)
this.setState({
    [event.target.name]:event.target.value
})
}

    render() {
        return (
         <div>
           <Header />
          
     <form onSubmit={this.addNewBeer}> 
      <label>
        new beer:
         <br/>  <input onChange={this.handleChange} type="text" name="name"/>
         </label>
         {/* <input type="submit" value="Submit"/> */}

         <br/> 
         <label>
    tagline:
    <br/>  <input onChange={this.handleChange}type="text" tagline="tagline" />
  </label>
  {/* <input type="submit" value="Submit" /> */}

  <br/>
    <label>
    description:
    <br/>   <input onChange={this.handleChange}type="text" description="description" />
  </label>
  {/* <input type="submit" value="Submit" /> */}

  <br/> 
    <label>
    first_brewed:
    <br/>   <input onChange={this.handleChange}type="text" first_brewed="first_brewed" />
  </label>
  {/* <input type="submit" value="Submit" /> */}
  <br/> 
    <label>
    brewers_tips:
    <br/>   <input onChange={this.handleChange}type="text" brewers_tips="brewers_tips" />
  </label>
  {/* <input type="submit" value="Submit" /> */}
  
  <br/> 
    <label>
    attenuation_level:
    <br/>   <input onChange={this.handleChange}type="number" attenuation_level="number" />
  </label>
  {/* <input onChange={this.handleChange}type="submit" value="Submit" /> */}
  <br/> 
    <label>
    contributed_by:
    <br/>   <input onChange={this.handleChange}type="text" contributed_by="contributed_by" />
  </label>
  <input onChange={this.handleChange}type="submit" value="Submit" />
  

    </form>

 
  </div>
        );
    }
}

export default newBeer;