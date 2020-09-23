const top_bar_view = () =>{
   return `<header class="d-flex fixed-menu bg-white">
   <ul class="topnav" id="myTopnav">
  <li class="img-container"> <img src="/assets/images/header.jpg" class="d-flex"></li>
  <li><a href="/" data-link>HOME</a></li>
  <li><a href="/posts" data-link>SHOP</a></li>
  <li><a href="#about">MAGAZINE</a></li>
  <li><a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a></li>
</ul>
<div class="d-flex margin-left-auto">
                                <ul class="d-flex align-items-center mr0 pd0 topnav">
                                <li class="pd0">
                                <span class="material-icons d-flex">
                                search
                                </span>
                                </li>
                                <li class="mr-15">
                       
                                <div class="wrap-input100">
                                
                                <input class="input100" type="text" name="name" >
                                <span class="focus-input100"></span>
                                </div>
                                </li>
                                    <li class="mr-15">
 
                                        <div class="nav-search search-switch d-flex icon-color">
                                       
                                        <img src="/assets/images/add-to-cart.png" class="d-flex add-to-cart">
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div class="card-stor">
                                        <a href="#about">LOGIN</a>  
                                        </div>
                                    </li>
                                </ul>
                            </div>
</div>
   </header>`
}
export default top_bar_view;