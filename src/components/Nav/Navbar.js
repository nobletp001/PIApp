import React from 'react'

export default function Navbar() {
    return (
      <div>
 <nav class="navbar navbar-expand-lg fixed-top navbar-shrink">
  	<div class="container">
  	
  
 		<a class="navbar-brand" href="index.html">
 		<img className="center-block" src="img/phub3.png" height="63px" alt="Pi Logo" />

 		</a>

  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    		<i class="fas fa-bars"></i>
  		</button>

  		<div class="collapse navbar-collapse" id="collapsibleNavbar">
    		<ul class="navbar-nav ml-auto">
      			<li class="nav-item">
        			<a class="nav-link active" href="index.html">Home</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">PiMall</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">PiPay</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">PiExchange</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">Support</a>
      			</li>
      			
      			
    		</ul>
  		</div>
 	</div>
</nav>
      </div>
    );  
}
