<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form-component/>
    <list-component></list-component>
   
 
  </div>
</template>

<script>
// @ is an alias to /src
import FormComponent from '@/components/Form.vue'
import ListComponent from '@/components/List.vue'


export default {
  data() {
    return {
       
    }
  },
  name: 'Home',
  components: {
    FormComponent,
    ListComponent,
  },
  methods: {
  
  },
}
</script>
