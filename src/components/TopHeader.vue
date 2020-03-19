<template>
  <div class="top-header">
  			<div class="md-4">
				<ul id="top-header-menu" class="top-nav clearfix d-flex justify-content-between align-items-center m-0 p-0">
          <span class="top-text ml-3"> Our free courses are downloaded over 3 MILLION times. Get them now!
          </span>
				<li class="ml-auto"><a href="#">Call Us On: 07888</a><a href="#" class="pl-5 mr-4">Beautifying
          <facebook :url="url" scale="3"></facebook>
    <twitter :url="url" title="Check me on Github" scale="3"></twitter>
    <linkedin :url="url" scale="3"></linkedin>
    <telegram :url="url" scale="3"></telegram>
    <whats-app :url="url" title="Hello" scale="3"></whats-app>
    <pinterest :url="url" scale="3"></pinterest>
    <reddit :url="url" scale="3" title="My Github"></reddit>
    <google :url="url" scale="3"></google>
    <email :url="url" subject="Hello" scale="3"></email>
  
          </a></li>
				</ul>
			</div>
       <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">ABNB-RWANDA</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Blog</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/myCart"><i class="fa fa-shopping-cart"></i> My Cart</b-nav-item>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <span><i class="fa fa-user-circle"></i> Sign In</span>
          </template>
          <b-dropdown-item to="/signin"><i class="fa fa-user-circle"></i>Sign In</b-dropdown-item>
                    <b-dropdown-item href="#">Continue With:</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 </div>
</template>

<script>
import MyCart from '../components/MyCart'
export default {
components: {
  "app-cart": MyCart
}
}
</script>

<style scoped>
.top-header{
    margin-top: -60px;
    background-color: #77cc6d;
    
}

.top-bar ul {
    list-style: none;
    margin: 0 10px;
    padding: 0;
}
#top-header-menu li {
    display: inline;
    padding: 10px;
    color: white;
}
a{
  text-decoration: none;
  color: white;

}

.top-bar {
    background: red;
    line-height: 40px;
    height: 40px;

}
.to-right{
  flex: left;;
  color: white;
}
.top-text{
  color: white;
  font-size: 15px;
  margin-left: -100px;;
}
</style>