<template>
  
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3 ">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>

    <div>
        <button
        class="btn btn-danger mx-2"
        >
            Borrar
            <i class="fa fa-trash-alt" />
        </button>

         <button
        class="btn btn-primary"
        >
            Subir foto
            <i class="fa fa-upload" />
        </button>
    </div>

  
  </div>
   <hr/>
    <div class="d-flex flex-column px-3 h-75">
    <textarea
    placeholder="¿Que sucedió hoy?"
    >
    </textarea>
    </div>
    <FabActionButton icon="fa-save"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Egypt.Giza.Sphinx.02.jpg"/>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
name:'EntryView',
components:{
    FabActionButton:defineAsyncComponent(() => import('@/modules/dayBook/components/FavActionButton.vue'))
}
}
</script>

<style lang="scss" scoped>
 textarea{
    height: 90%;
    font-size: 20px;
    border:none;

    &:focus{
        outline:1px solid rgb(197, 197, 197);
    }
 }

 img{
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    margin-top: 20px;
    position:fixed;
    bottom: 150px;
    right: 25px;
    width: 200px;
 }
</style>