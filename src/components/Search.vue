<template> 
<div class="container">
  <div class="container-fluid">
    <div class="search-wrapper">
    <!-- the search bar form -->
      <form v-on:submit="getfilteredData">
        <div class="form-row search">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Search  ..." v-model="search" v-on:keyup="getfilteredData">
          </div>
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
        </div>
        </div>
      </form>
 </div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.search{
    padding: 2rem;
    margin-left: 4rem;
    border-color: red;
    border: red;
    border-radius: 5px;
}
</style>>


