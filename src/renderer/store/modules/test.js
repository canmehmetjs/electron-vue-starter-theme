const state = {
    number: 0
}

const mutations = {
    INCREASE (state, data) {
        state.number++
    },
    DECREASE (state) {
        state.number--
    },
    RESET (state) {
        state.number = 0
    },
}
const actions = {
        increase_number({commit}) {
           commit('INCREASE')
        },
        decrease_number({commit}) {
            commit('DECREASE')
        },
        reset({commit}) {
            commit('RESET')
        },
        
}

const getters = {
   // End of getPageAlerts getter
    current_number(state){
        return state.number
    },
};


export default {
    namespaced : true, 
    state, mutations, actions, getters
}

