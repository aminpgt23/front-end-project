<template>
  <div>
    <navbar></navbar>
    <tombol></tombol>
    <viewData></viewData><hr>
    <copyright></copyright>
    </div>
</template>
<script>
import tombol from '../components/tombol.vue'
import copyright from '../components/copyright.vue'
import navbar from '../components/navbar.vue'
import viewData from '../components/viewData.vue'
export default {
    name:'facePage',
    components:{
        navbar,
        copyright,
        viewData,
        tombol
    }
}
</script>

<style>

</style>