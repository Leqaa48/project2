import React from 'react';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function Nav () {
  const element = <FontAwesomeIcon icon="spinner"  size="xs"  />
    return ( <nav class="navbar navbar-expand-md navbar-light bg-light " >
    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <a class="navbar-brand " href="#" className >Navebar</a>

    <i class="fas fa-search"></i>
    {element}
<p>انا لقاء  </p>



    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Categoryes<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        
      </ul>
      
     
        <input  class="  form-control mr-sm-2 searchh  " type="search" placeholder="search" aria-label="Search" />
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
     
      
    </div>
  </nav> 
  );
}
 
export default Nav;


