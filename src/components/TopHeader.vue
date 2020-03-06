<template>
  <div class="top-header">
  			<div class="md-4">
				<ul id="top-header-menu" class="top-nav clearfix">
          <span class="top-text"> Our free courses are downloaded over 3 MILLION times. Get them now!
          </span>
				<li><a href="#">Call Us On:</a></li>
				<li><a href="#">Beautifying</a></li>
				</ul>
			</div>
       <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">ABNB-RWANDA</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="about">About</b-nav-item>
        <b-nav-item to="blog">Blog</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav  a.router-link-exact-active {
    color: white;
}
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