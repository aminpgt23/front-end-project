<template>
  <div>
    <navbar></navbar>
   <listform :StudentDataProps="StudentData"></listform>
    <copyright></copyright>
  </div>
</template>

<script>
import Listform from'../components/Listform.vue'
import studentService from '../services/studentService.js'
import copyright from '../components/copyright.vue'
import navbar from '../components/navbar.vue'
export default {
      methods:{
        getStudent(){
            let id = this.$route.params.id;
            studentService.getIdStudent(id)
                .then(Response => {
                    this.StudentData =Response.data;
                    console.log(Response.data);
                })
                .catch(e =>{
                    console.log(e);
                })
                
        },
    },
  
    mounted(){
        this.getStudent();
    },
    data(){
        return{
            StudentData:null
        }
    },
  components: { copyright,navbar,Listform },
    name:"UpdateListPage"
}
</script>

<style>

</style>