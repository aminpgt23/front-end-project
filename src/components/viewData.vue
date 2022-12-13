<template>
  <div  class="row w-100">
    <div class="col-12  col-md-6 col-lg-4" v-for="(item,index) in studentDataFiltered" :key="index.Id" >

    <div class=" border border-primary p-3 ml-4 mt-3 mb-4 rounded " style="width:80%; border-shadow:20%">
        <table>
          <h5>nama : {{item.nama}}</h5>
          <h5>umur : {{item.umur}}</h5><hr>
        <br>
          <pre><b>Email      : {{item.email}}</b></pre>
          <pre><b>Soft Skill : {{item.soft_skill}}</b></pre>
          <pre><b>Hard Skill : {{item.hard_skill}}</b></pre>
          <pre><b>Interest   : {{item.interest}}</b></pre>
            <div class="d-flex flex-wrap">
              <router-link :to="'/updateList/' + item.id">
                <button type="button" class="swal2-confirm btn-warning text-dark mt-4 ml-4">
                  Update
                </button>
              </router-link>
              <div>
                <button @click="deleteData(item.id)" type="button" class="swal2-confirm btn-danger mt-4 ml-4">Delete</button>
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
            
          })
          .catch(e =>{
            console.log(e);
            
          })
        
      },
      filterStudent(){
        const arrTemp = [];
        this.StudentData.filter((obj) => {
          Object.values(obj).forEach((item) => {
            if(String(item).toLowerCase().includes(this.searchDataProps.toLowerCase())){
              if(arrTemp.length === 0){
                arrTemp.push(obj)
              }else if((arrTemp.length !== 0) && (arrTemp[arrTemp.length - 1].id !== obj.id)){
                arrTemp.push(obj);
              }
            }
          })
        })
        this.studentDataFiltered = arrTemp;
      }
  },
  mounted(){
    this.getData();
  },
  data(){
    return{
      StudentData:null,
      search:'',
      studentDataFiltered : null
    }
  },
  props: [
    "searchDataProps"
  ],
  watch: {
    searchDataProps(){
      this.filterStudent()
    },
    StudentData(newVal){
      this.studentDataFiltered = newVal;
    }
  },
}
</script>

<style>

</style>