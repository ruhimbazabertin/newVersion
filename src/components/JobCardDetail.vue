<template>
<center>
    <div class="jobcard-detail">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Product Description">
          <b-card-text>
           <p><small>Product Name:</small> <strong>Apple</strong></p>
           <p><small>Product Category:</small><strong> Flower</strong></p>
           <p><small>Quantity:</small><input type="number" placeholder="1"/></p>
           <p><small>Product Price:</small><strong> $250</strong></p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
           <b-card-footer>
              <span style="margin-right: 180px;">
                   <router-link to="/" class="btn btn-warning">
                        <i class="fa fa-angle-left"></i> Go Back To Shop
                    </router-link></span>
                    <router-link to="/" class="btn btn-success">
                        Add To Cart
                        <i class="fa fa-angle-right"></i>
                    </router-link>
           </b-card-footer>
  </b-card>
</div>
</center>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.jobcard-detail{
    margin-top: 40px;
    margin-bottom: 50px;
}
</style>