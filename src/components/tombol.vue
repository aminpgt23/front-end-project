<template>
  <div><br>
    <div class="d-flex justify-content-between"> <router-link to="/add" class="swal2-confirm swal2-styled mt-2 mb-5">Add</router-link>
   
       <input type="text" style="height:30px"  @keyup="$emit('searchEmit', searchData)" v-model="searchData" class="mr-5" placeholder="Search ..." />
       <!-- <button><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button> -->
    </div>
   
  </div>
</template>

<script>

export default {

  name:"tombolComponent",
  data() {
    return{
      searchData : null,
    }
  }
  
  // props:["viewdataprops"],
}
</script>

<style>

</style>