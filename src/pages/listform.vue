<template>
  <div>
    <navbar></navbar>
    <Listform></Listform>
    <copyright></copyright>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import Listform from '../components/Listform.vue'
import copyright from '../components/copyright.vue'
export default {
   components:{
        Listform,
        navbar,
        copyright
    },
    name:"listformPage"
}
</script>

<style>


</style>