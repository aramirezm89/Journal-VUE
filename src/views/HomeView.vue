<template>
 <div class="container-fluid">
   <div class="row">
    <div class="col-12 text-center">
       <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    </div>

 <div class="row col-12 d-flex gap-2">
     <div class="text-center">
      <button class="btn btn-primary me-2" @click="goToDayBook">Primary</button>
      <button class="btn btn-secondary  me-2">Secondary</button>
      <button class="btn btn-info">Info</button>
    </div>
 </div>


  </div>
 </div>


</template>

<script>


export default {
  name: 'HomeView',
  methods:{
    goToDayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
