<template>
<div class="container">
  <b-row>
    <app-crousel></app-crousel>
  </b-row>
  <b-row>
    <app-search></app-search>
  </b-row>
  <b-row align-v="center">
  <app-card v-for="job in jobs" :key="job.id" :name="job.name"> </app-card>
  </b-row>
  <b-row>
    <app-subscribe></app-subscribe>
  </b-row>
 <!-- <b-row>
    <app-checkout></app-checkout>
  </b-row>-->
</div>
</template>
<script>
import CheckoutNewVersion from '../components/CheckoutNewVersion'
import JobCard from '../components/JobCard'
import Crousel from '../components/Crousel'
import Search from '../components/Search'
import Subscribe from '../components/Subscribe'
import res from '../../public/jobs.json'
export default {
  name: 'home',
  components: {
    "app-checkout": CheckoutNewVersion,
    "app-crousel": Crousel,
    "app-card": JobCard,
    "app-search": Search,
    "app-subscribe": Subscribe,
  },
  data(){
    return{
     jobs: res
    }
  },
  mounted(){
  //  this.fetchData();
   console.log(this.jobs)
  },
  methods: {
     fetchData(){ 
       
    }
  }
}
</script>

<style scoped>
</style>