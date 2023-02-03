<template>
  <button class="btn btn-primary">
    <i 
    class="fa fa-2x"
    :class="icon"
    />
  </button>
</template>

<script>
export default {
props:{
  icon:{
    type:String,
    required:false,
    default:'fa-plus'
  }
}
}
</script>

<style lang="scss" scoped>
button{
   
    border-radius: 100%;
    bottom: 35px;
    height: 60px;
    position: fixed;
    right: 30px;
    width: 60px;
    
}
</style>