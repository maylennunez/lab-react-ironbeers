import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = () => {
    return (
      <div >
      <ul className="links">
        
        <li ><Link  to="/new" className="list-group-item list-group-item-action" ><img src={"/images/new-beer.png"}></img><h1>Add New</h1></Link></li>
        <li><Link to="/randomBeer" className="list-group-item list-group-item-action" ><img src={"/images/random-beer.png"}></img><h1>Random Beer</h1></Link></li>
        <li><Link  to="/all-beers"  className="list-group-item list-group-item-action" ><img src={"/images/beers.png"}></img><h1> Beers</h1></Link></li>
      </ul>
     
      </div>
    );
  };
 
  export default HomePage; 