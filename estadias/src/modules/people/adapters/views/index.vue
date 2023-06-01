<template>
  <div>
    <div>
      <h1>{{ person }}</h1>
    </div>
    <b-row>
      <b-col cols="12" md="4">
      </b-col>
      <b-col cols="12" md="4">
        <b-form-group>
          <b-form-input v-model="person.name" placeholder="Nombre"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input v-model="person.job" placeholder="job"></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click="insertPerson">Registrar</b-button>
      </b-col>
      <b-col cols="12" md="4">
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="4" class="ml-1 mt-2" v-for="people in pagination.data" v-bind:key="people.id">
        <b-card>
          <div class="container-fluid">
            <b-row align-v="center">
              <b-col cols="3" class="text-center">
                <b-avatar variant="info" :src="people.avatar" size="4.5rem"></b-avatar>
              </b-col>
              <b-col cols="9">
                <b-row>
                  <b-col cols="12">{{ people.first_name +" "+ people.last_name}}</b-col>
                  <b-col cols="12">{{ people.email }}</b-col>
                  <b-col cols="12"> 
                    <b-button variant="danger" @click="showAlert">♥</b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>


  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Person } from "../../entities/Person";
import { PeopleController } from "../people.controller";
import { AllPeopleDto } from "../../entities/AllPeopleDto";


export default Vue.extend({
  name: 'IndexPersonVue',
  data() {
    return {
      page: 1 as number,
      pagination: {} as AllPeopleDto,

      person: {
        name: '',
        job: ''
      } as Person
    }
  },
  methods: {
    async getAllPeople() {
      const controller = new PeopleController();
      const response = await controller.getAllPeople(this.page);
      if(response.result){  
        this.pagination = response.entity!;
      }
    },

    async insertPerson() {
      const controller = new PeopleController();
      const response = await controller.insertPerson(this.person);
      
      if(response.result){
        this.person = {
          name: '',
          job: ''
        } as Person;

        this.$swal({
          title: '¡Registrada correctamente!',
          text: `la persona ${response.entity!.name} ha sido registrada correctamente`,
          icon: 'success',
        });
        
      }else{
        this.$swal({
          title: 'oh vaya..',
          text: `${response.message}`,
          icon: 'error',
        });
      }
    },
    showAlert() {
      // Use sweetalert2
      this.$swal({
        
      });
    },

  },
  mounted() {
    //estos son los metodos que se ejecutan cuando se carga el componente
    this.getAllPeople();
  }
})
</script>

<style></style>