<template>
<b-container>
  <b-row align-v="center">
  <app-card v-for="job in jobs" :key="job.id" :name="job.name"> </app-card>
  </b-row>
</b-container>
</template>
<script>
import JobCard from '../components/JobCard'
export default {
  name: 'home',
  components: {
    "app-card": JobCard
  },
  data(){
    return{
     jobs: []
    }
  },
  mounted(){
   this.fetchData();
  },
  methods: {
   async fetchData(){ 
     const res = await fetch("jobs.json");
     const val = res.json();
     this.jobs = val;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>