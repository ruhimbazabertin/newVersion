<template>
<b-container>
  <b-row>
    <app-crousel></app-crousel>
  </b-row>
  <b-row align-v="center">
  <app-card v-for="job in jobs" :key="job.id" :name="job.name"> </app-card>
  </b-row>
</b-container>
</template>
<script>
import JobCard from '../components/JobCard'
import Crousel from '../components/Crousel'
import res from '../../public/jobs.json'
export default {
  name: 'home',
  components: {
    "app-crousel": Crousel,
    "app-card": JobCard
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