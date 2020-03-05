<template>
<b-container>
  <b-row align-v="center">
  <app-card> </app-card>
  <app-card> </app-card>
  <app-card> </app-card>
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
  mounted(){
   this.fetchData();
  },
  methods: {
   async fetchData(){ 
     const res = await fetch("jobs.json");
     const val = res.json();
     console.log(val);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>