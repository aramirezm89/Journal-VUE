<template>
  <div 
  class="mb-3 pointer p-2 entry-container"
  @click="$router.push({name:'entry',params:{id:10}})">
    <!-- title -->
    <div class="d-flex entry-title">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
      doloremque recusandae culpa voluptatum veniam, mollitia deleniti.
      Voluptas, esse unde asperiores vero aliquid, alias repellat facilis nihil
      atque sit labore officiis.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>

<style lang="scss" scoped>

.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition:  background-color 0.2s ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    
  }
  .entry-description{
  font-size: 1rem;
  font-weight: lighter;
}
}
.entry-title {
}


</style>
