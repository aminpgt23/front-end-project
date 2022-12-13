<template>
  <div>
  <div v-show="!success">
  <div>
      <router-link to="/face">
      <button type="button" class="btn btn-primary text-dark mt-4 ml-5">Back</button>
      </router-link>
      </div>
      <div style="display: flex; justify-content:center">
  
    <div
      class="border rounded border-primary justify-content-center mt-3 mb-4 ml-5"
      style="padding: 50px; width: 50%; justify-items: center; position: center"
    >
      <div>
        <h1 class="text-center">add Students</h1>
        <hr />
      </div>
      <form @submit.prevent="inputStudent" >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Student Name</label>
            <input type="text" class="form-control" v-model="StudentData.nama" placeholder="Enter Name" required />
          </div>
          <div class="form-group col-md-6">
            <label>Soft Skill</label>
            <input type="text" class="form-control" v-model="StudentData.soft_skill"  placeholder="Enter Soft Skill" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-2">
            <label>StudentAge</label>
            <input type="number" class="form-control" v-model="StudentData.umur" style="width:130px"  placeholder="Enter Age" />
          </div>
          <div class="form-group col-md-4">
            <label class="ml-5">Gender</label>
            <select class="form-control ml-5" v-model="StudentData.jenis_kelamin" style="width:70%" placeholder="Choose Gender ">
              <option selected>Choose...</option>
              <option >Male</option>
              <option >Female</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label>Hard Skill</label>
            <input type="text" class="form-control" v-model="StudentData.hard_skill" placeholder="Enter Hard Skill" />
          </div>
          <div class="form-group col-md-6">
            <label>Student Email</label>
            <input type="email" class="form-control" v-model="StudentData.email" placeholder="Enter Name" required />
          </div>
          <div class="form-group col-md-6">
            <label>Interest</label>
            <select class="form-control" v-model="StudentData.interest" placeholder="">
              <option selected></option>
              <option>Web Frontend</option>
              <option>Web Backend</option>
            </select>
          </div>
        </div>
        <div>
          <label>Self Description</label>
          <textarea class="form-group col-12" v-model="StudentData.deskripsi_diri"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{buttonText}}</button>
      </form>
    </div>
  </div>
</div>
    <!-- <div v-show="success">
      <succesform></succesform>
    </div> -->
  </div>
</template>

<script>
// import succesform from './succesform.vue'
import studentService from '../services/studentService'
import Swal from 'sweetalert2'

export default {
  data(){
    return{
      buttonText :"submit",
      success :false,
      StudentData:{
        "deskripsi_diri":null,
        "email":null,
        "hard_skill":null,
        "interest":null,
        "jenis_kelamin":null,
        "nama":null,
        "soft_skill":null,
        "umur":null
      }
    }
  },
  methods:{

    inputStudent(){
      let data =this.StudentData;
      if(this.buttonText ==="submit"){
        this.success = true;
        studentService.create(data)
      .then(response => {
        console.log(response.data);
      });
            this.$fire({
        type: 'success',
        title: 'sukses',
        text: 'Data sudah terdaftar',
        footer: 'tetap semangat ><'
      }).then(() => {
        this.$router.push('/face')
      })
       
              .catch(() => {
                 this.$router.push('/face')
              });
      }else{
          studentService.updateStudent(data.id,data)
              .then(response => {
                  console.log(response.data);
                  this.success = true;
              })
              .catch(e => {
                  console.log(e);
              });
              let timerInterval
              Swal.fire({
              timerProgressBar: true,
              didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                },
                title: 'sukses',
                timer:1000,
                text: 'Data sudah diupdate',
                footer: 'tetap semangat ><'
              }).then(() => {
                this.$router.push('/face')
              })
            
      }
      
    },
    
  },
    name:"ListformComponents",
    components:{
    //  succesform
      
    },
    props: ["StudentDataProps"],
    watch: {
      "StudentDataProps"(newValue){
        this.StudentData=newValue;
        this.buttonText= "update"
      }
    }
}
</script>

<style>

</style>