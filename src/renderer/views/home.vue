<template>
    <div class="page_container">
           


            


            <b-container >

                        
                        <div class="text-center">
                            <img  src="~@/assets/logo-electron.svg" width="120px" >
                            <img  src="~@/assets/logo-vuejs.png" width="120px">
                        </div>
                         


                        <h2 class="text-center m-t-80">{{ $t('homepage.title') }}</h2>
                        <p class="text-center">{{ $t('homepage.description') }}</p>

                        <ul class="creative_list">
                            <li>Vue</li>
                            <li>Axios</li>
                            <li>Vuex-i18n</li>
                            <li>Vuex
                                 <p>
                                      <b-badge @click="decreaseNumber" pill variant="primary">Decrease</b-badge>   
                                      {{current_number}}
                                       <b-badge @click="increaseNumber" pill variant="success">Increase</b-badge>
                                 </p>

                            </li>
                            <li>Bootstrap Vue</li>
                            <li>
                                Progress Bar Top
                                 <b-badge @click="start_top_progress" pill variant="primary">Start Progress</b-badge>
                                 <b-badge @click="stop_top_progress" pill variant="success">Stop Progress</b-badge>
                            </li>
                            
                        </ul>

                        
                       
                    
            </b-container>
           

            
    </div>
</template>

<script>
    import NProgress from 'nprogress/nprogress'
    export default {
        computed:{
            current_number(){
                return this.$store.getters['test/current_number']
            }
        },
        methods:{
            start_top_progress:function(){
                NProgress.start()
            },
            stop_top_progress:function(){
                NProgress.done()
            },
            increaseNumber: function(){
                this.$store.dispatch('test/increase_number')
            },
            decreaseNumber: function(){
               this.$store.dispatch('test/decrease_number')
            }
        }
    }
</script>

<style lang="scss" scoped>

ul.creative_list li {
    font-size: 20px;
    margin-bottom: 13px;
    text-align: center;
    list-style: none;

    p{
        display: inline-block;
        .badge{
            font-size:17px;
        }
    }
}
</style>
