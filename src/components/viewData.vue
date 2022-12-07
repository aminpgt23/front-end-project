<template>
  <div class="row">
 <div class="border border-primary p-3 w-25 ml-4 mt-3 mb-4 rounded" v-for="(item,index) in StudentData" :key="index.Id">
    <table>
      <h5>nama : {{item.nama}}</h5>
      <h5>umur : {{item.umur}}</h5>
    <br>
      <pre><b>Email      : {{item.email}}</b></pre>
      <pre><b>Soft Skill : {{item.soft_skill}}</b></pre>
      <pre><b>Hard Skill : {{item.hard_skill}}</b></pre>
      <pre><b>Interest   : {{item.interest}}</b></pre>
      <div class="d-flex">
        <div class="d-flex">
          <router-link :to="'/updateList/' + item.id">
            <button type="button" class="btn btn-warning text-dark mt-4 ml-4">
              Update
            </button>
          </router-link>
          <div>
            <button @click="deleteData(item.id)" type="button" class="btn btn-danger mt-4 ml-4">Delete</button>
          </div>
        </div>
        <div class="d-flex mt-3 ml-1">
          <img v-if="item.jenis_kelamin == 'Female'"
            style="width: 35px; height: 53px"
            class="ml-5"
            src="../assets/female.png"
            alt=""
          />
          <img v-else
            style="width: 40px; height: 40px"
            class="ml-3"
            src="../assets/male.png"
            alt=""
          />
        </div>
      </div>
    </table>
  </div>
  </div>
</template>

<script>
import studentService from '../services/studentService'
export default {
methods:{
  deleteData(id){
    if(confirm("apakah akan dihapus?")){
      studentService.deleteStudent(id)
       .then(Response => {
            console.log(Response.data);
          })
          .catch(e =>{
            console.log(e);
          });
          location.reload();
          }else{
            alert("hapus batal");
          }
  },
  
  getData(){
    studentService.getAll()
          .then(Response => {
            this.StudentData =Response.data;
            console.log(this.StudentData);
            // this.jenis_kelamin = true;
          })
          .catch(e =>{
            console.log(e);
            // this.jenis_kelamin = false;
          })
        
      },
  },
  mounted(){
    this.getData();
  },
  data(){
    return{
      StudentData:null
    }
  },
    

    name:"viewDataComponent"
}
</script>

<style>

</style>