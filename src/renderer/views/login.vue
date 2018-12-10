<template>
  <div class="page-container ">
        <noscript>
                Javascript is not enabled. Please enable javascript to login.
        </noscript>
        
        <div class="authentication-page container">
                <form class="form-type-1 m-t-50"  v-if="signup_form_visibility" @submit.prevent="validateBeforeSubmit">
                        <div class="text-center">
                            
                             <h4 class="bold m-b-50" >{{ $t('login.title') }}</h4> 
                            
                        </div>    
                        
                        <div class="form__group">
                               <label for="email_address" class="form__label">Username</label>
                               <input 
                              
                              
                               v-validate="'required|email'"
                               class="form__input" id="email_address" type="email" placeholder="Your email address" v-model="email_address" name="email_address">
                               <span v-show="errors.has('email_address')" class="form-error-notification error">{{ errors.first('email_address') }}</span>
                        </div>
                        <div class="form__group">
                                  <label for="password" class="form__label">Password</label>
                                  <p class="input_extra_btn form__label"><router-link :to="'/forgot'" > Forgot?</router-link></p>
                                  <input 
                                   
                                     v-validate="'required'" 
                                     v-model="password" id="password" class="form__input" type="password" placeholder="Your account password"  name="password">
                                  <span v-show="errors.has('password')" class="form-error-notification error">{{ errors.first('password') }}</span>
                                  
                        </div>

                        <label for="password" class="form__label">Please select an account type:</label>
                        <b-form-group  class="m-b-40">
                                <b-form-radio-group v-model="user_type"
                                                    :options="user_type_options"
                                                    name="user_type">
                                </b-form-radio-group>
                        </b-form-group>


                  
                       
                      
                        <button  class="site_btn primary_btn form_btn " type="submit" >
                              <div class="button_spinner" v-if="spinner_logging_in">
                                                <spinner :status="spinner_logging_in"></spinner>
                              </div>
                              <div class="button_content" v-if="spinner_logging_in == false">
                                     Sign in 
                              </div>
                        </button>
                  
                     
                       

                </form>
               

         
        </div>
        
              
        
  </div>
</template>

<script>


import Spinner from 'vue-spinner-component/src/Spinner.vue'
export default {
  name: "login-contributer",
  inject: {
    $validator: '$validator'
  },
  data() {
    
       

    return {
     
      spinner_logging_in: false,
      confirmin_email_address_spinner: false,
      // Form Inputs
      email_address: 'canmehmetcp@gmail.com',
      password: 'password',
      user_type: 'Waiter',
      user_type_options: ['Waiter','Administrator'],  
      form_errors: 0,
     
      // Form Visibility
      
      signup_form_visibility: true,

      // Email confirm and token expired screen models
      your_email_is_confirmed_visibility: false,
      token_expired_visibility: false,

      
       

    };
  },
  computed: {},
  watch : {},
  methods: {
        activateLoginScreen: function(){
            this.signup_form_visibility = true
        },
        validateBeforeSubmit() {
            this.spinner_logging_in = true
            let errors = 0
            if(this.email_address == ''){
                errors++
            }
            if(this.password == ''){
              errors++
            }

            if(errors != 0){
                alert('Please check required fields')
            }else{
                let submitted_user_data = {
                            'email_address': this.email_address,
                            'password': this.password,
                            'user_type': this.user_type
                }
                

                 // Call the api set in Vuex Actions for LOGIN
                this.$store.dispatch("auth/loginUser", submitted_user_data)
                /*
                .then(response => {
                        this.spinner_logging_in = false
                })
                .catch(error => {
                         this.user_login_failed = true
                         this.spinner_logging_in = false
                         this.button_title = 'Sign in'
                });
                */
            }
        },
        continueToForgot: function(){
           this.$router.push({path: '/forgot'})
        },
        resend_email : function(){
            this.$toasted.global.confirmation_email_sent();
            this.timer_visible = false
            this.resened_email_button_visible = false
        },
      
       
      
   
  },
  components: {
   Spinner,
   
  },

  
  created() {
  
  },
  destroyed(){
    
  },
};
</script>

