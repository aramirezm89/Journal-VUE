<template>
  <div class="d-flex justify-content-center align-items-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
     <FabActionButton/>
  </div>

</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
components:{
    FabActionButton:defineAsyncComponent(() => import('@/modules/dayBook/components/FavActionButton.vue'))
}
}
</script>

<style lang="scss" scoped>
 div{
    height: 100%;
 }
</style>