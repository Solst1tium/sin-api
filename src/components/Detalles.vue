<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">     
      <v-card>
        <v-card-title class="headline">
         {{doctor.nameD}}
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close_modal">
            Cerrar
          </v-btn>      
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props: {
    dialog: Boolean,    
    doctor: Object
    },
    data: () => ({
      
    }),
    methods: {
      close_modal(){
      this.$emit('cerrar_dialog')
       }
    },
  }
</script>