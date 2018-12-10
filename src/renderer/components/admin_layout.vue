<template>
   <div class="admin_view">
             <div class="sidebar">
                    <div class="admin_logo">
                         <img src="~@/assets/logo.png" width="120px">
                    </div>
                   
                    <ul>
                      <li>
                          <router-link :to="'/new-order'">Dashboard</router-link>
                      </li>
                      <li>
                          <router-link :to="'/orders'">Orders</router-link>
                      </li>
                      <li>
                          <router-link :to="'/new-order'" class="important">New order</router-link>
                      </li>
                      <li class="seperator"></li>
                      <li>
                          <router-link :to="'/new-product'">Add Product</router-link>
                      </li>
                      <li>
                          <router-link :to="'/new-product'">Add Employee</router-link>
                      </li>
                    </ul>
            </div>
            <div class="admin_content">
                 <router-view/>
            </div>
           
   </div>
</template>

<script>
    export default {
        computed:{
                user_loggedin(){
                    console.log(this.$store.getters['auth/loggedIn'])
                },
                
        },
    }
</script>

<style scoped>

</style>