import React from 'react';
import '../App.css';

function Post ( props )  {
    return (
        
    <div class="card  mr-3 ml-3 mt-5 " className="Post">
        
        <img class="card-img-top " src="/images/4.png" alt="Card image cap" />
        <div class="card-body">
    <h5 class="card-title" className="card-title">{props.value}</h5>
            
        </div>
    </div>
      );
}
 
export default Post;
