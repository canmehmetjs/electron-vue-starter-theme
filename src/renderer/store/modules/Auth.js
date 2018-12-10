// Important imports that always should be present
import {SITE_API_CONFIG} from '@store/config.js';
import router from '@router'

const state = {
    isLoggedIn: getSavedState('auth.access_token')
}

const mutations = {
    SET_USER (state, data) {
        state.isLoggedIn = data.loggedin
    },
    UNSET_USER (state) {
        state.isLoggedIn = false
    },
}
const actions = {
        loginUser({commit}, login_data) {
            // SITE_API_CONFIG.API_CONFIG. = Check store/config.js
            // API_ENDPOINT = "http://localhost:3000/api/"  

            let current_api = SITE_API_CONFIG.API_CONFIG.API_ENDPOINT+ 'signin'
            let login_details = {
                email :login_data.email_address,
                password: login_data.password,
            }
            console.log('xhan')
            alert('You need to call an api from store/modules/auth.js')
            /*
            return SITE_API_CONFIG.API_CONFIG.SITE_API.post(current_api,login_details)
                .then((response) => {
                    // Get current login response
                    let login_response_data = {
                        access_token : response.data.accessToken
                        // Store your extra data here.
                    }
                    
                    // Save data to local storage
                    saveState('auth.access_token', login_response_data.access_token)
                    
                    //Tell the store that now user is loggedin.
                    commit('SET_USER', { loggedin: true, user_role_count: login_response_data});    
                   
                    // Push router to profile page
                    router.push({ path : '/profile'});
                    
                    return response
                    
                }).catch((error) => {
                    return error.response
                })
            */
        },
        
}

const getters = {
   // End of getPageAlerts getter
    loggedIn(state){
        return state.isLoggedIn
    },
};

// ===
// Private helpers
// ===

function getSavedState(key) {
    return localStorage.getItem(key);
}
function saveState(key, state) {
    localStorage.setItem(key,state);
}
function removeState(key) {
    localStorage.removeItem(key);
}

export default {
    namespaced : true, 
    state, mutations, actions, getters
}

