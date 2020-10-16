<template>
<div class="container">
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="nuevaHora.name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="nuevaHora.rut" :counter="10" :rules="rutRules" label="Rut" required></v-text-field>

    <v-text-field v-model="nuevaHora.email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-select v-model="nuevaHora.especialidad" @change="funcion1"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Especialidad"
      required>
    </v-select>

     <v-select v-model="nuevaHora.doctor" :items="doctores" item-text="nameD"
     return-object item-value="value" label="Selecciona un doctor"></v-select> 

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="agregarHora">
      AGENDAR
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>

  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex' 
  export default {
    data: () => ({
      valid: true,     
      selectedDr: null,
      nuevaHora: {name: '',
       rut: '',
        email: '', 
        especialidad:'', 
        doctor: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ], 
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
         rutRules: [
        v => !!v || 'Name is required',
        v => /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\.?(0?[1-9]{3})\.?(0?[1-9]{3})-?([\dkK])$/.test(v) || 'Name must be less than 10 characters',
      ],
    
      items: [
        'Kinesiología',
        'Cardiología',
        'Medicina general',
        'Pediatría',
      ],    
    }),
    methods: {
      ...mapActions(['selectedDoctor', 'agendarHora']),

      validate () {
        this.$refs.form.validate()
      },
      funcion1: function(nuevaHora){
         this.$emit('nueva_hora', nuevaHora.especialidad)    
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      
      agregarHora(){
        this.validate()
        this.agendarHora(this.nuevaHora)
          console.log(this.nuevaHora)    
          this.nuevaHora = {name:'', rut:'', especialidad:'', doctor:''}
          this.reset()         
      }
    },
    computed: {
      ...mapState(['doctores', 'selectedItemDr', 'todasHoras']) 
    },
  }
</script>