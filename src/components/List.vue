<template>
  <v-card class="mx-auto" max-width="100vh" tile>

    <v-list dense>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in todasHoras" :key="i">
          <v-list-item-icon>
            <v-icon>mdi-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import {mapState} from 'vuex' 
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
     computed: {
      ...mapState(['doctores', 'selectedItemDr', 'todasHoras']) 
    }
  }
</script>