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
  <b-row>
    <app-signin></app-signin>
  </b-row>
</div>
</template>
<script>
import JobCard from '../components/JobCard'
import Crousel from '../components/Crousel'
import Search from '../components/Search'
import Subscribe from '../components/Subscribe'
import SignIn from '../components/SignIn'
import res from '../../public/jobs.json'
export default {
  name: 'home',
  components: {
    "app-crousel": Crousel,
    "app-card": JobCard,
    "app-search": Search,
    "app-subscribe": Subscribe,
    "app-signin": SignIn
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