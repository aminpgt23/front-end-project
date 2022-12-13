<template>
  <div>
    <navbar></navbar>
    <tombol @searchEmit="searchFunc" ></tombol>
    <viewData :searchDataProps="searchData"></viewData><hr>
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
    },
    methods: {
        searchFunc(searchData){
            this.searchData = searchData;
        }
    },
    data(){
        return{
            searchData : null,
        }
    }
}
</script>

<style>

</style>