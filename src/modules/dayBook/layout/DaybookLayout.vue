<template>
    <NavBar/>
  <div class="d-flex">
    <div class="col-4">
       <EntryList/>
    </div>
        <div class="col">
        <router-view/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
components:{
    NavBar : defineAsyncComponent(() =>  import('@/modules/dayBook/components/NavBar')),
    EntryList : defineAsyncComponent(() =>  import('@/modules/dayBook/components/EntryList')),
}
}
</script>

<style>

</style>