<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form-component @nueva_hora = 'funcion1'/>
    <list-component></list-component>
    <detalles-component> </detalles-component>
 
  </div>
</template>

<script>
// @ is an alias to /src
import FormComponent from '@/components/Form.vue'
import ListComponent from '@/components/List.vue'
import DetallesComponent from '@/components/Detalles.vue'

export default {
  data() {
    return {
       dialog: false,
    }
  },
  name: 'Home',
  components: {
    FormComponent,
    ListComponent,
    DetallesComponent
  },
  methods: {
    funcion1(x){
      console.log(x)

    }
  },
}
</script>
