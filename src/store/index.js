import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctores: [
      {nameD: 'Cristian', value: 1, default: true},
      {nameD: 'Gabriela', value: 2},
      {nameD:  'Nicole', value: 3},
      {nameD: 'Matias', value: 4},
      {nameD: 'Esteban', value: 5}     
    ],
    todasHoras: [],
    selectedItemDr: null,
    cita: null     
  },
  mutations: {
    SELECTED_DOCTOR(state, selectedDr){
      state.selectedItemDr = selectedDr
    },
    AGENDAR_HORA(state, cita){
      state.todasHoras.push(cita)
    }
  },
  actions: {
    selectedDoctor({commit, state}, doctor){
      commit('SELECTED_DOCTOR', doctor)     
      return state.selectedItemDr      
    },
    agendarHora({commit, state}, horaD){
      commit('AGENDAR_HORA', horaD)
      return state.todasHoras
    }
  },
  modules: {
  }
})
