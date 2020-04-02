<template>
  <div>
   <b-col>
     <router-link to="/jobCardDetail" style="text-decoration: none;">
    <b-card 
            :title="name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt=""
            img-top
            tag="article"
            style="max-width:20rem"
            class="mb-2 ml-4"
            footer="$0">
            
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
     <!-- <b-button variant="primary">Apply</b-button>-->
    </b-card>
     </router-link>
    

    </b-col>
    </div>    
</template>

<script>
export default {
  props: ['name'],
}
</script>

<style>
</style>

