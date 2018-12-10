<template>
    <b-navbar toggleable="md" class="m-b-50 navigation_menu">
                    <b-navbar-brand href="#">Logo</b-navbar-brand>
                    <b-navbar-nav>
                        <b-nav-item :to="'/'"> {{ $t('nav.home') }}</b-nav-item>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :to="'/login'"> {{ $t('nav.login') }}</b-nav-item>
                                <b-nav-item-dropdown right>
                                    <!-- Using button-content slot -->
                                    <template slot="button-content">
                                        {{ $t('nav.lang') }}
                                    </template>
                                    <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
                                    <b-dropdown-item @click="changeLanguage('sq')">Albanian</b-dropdown-item>
                                </b-nav-item-dropdown>

                    </b-navbar-nav>
    </b-navbar>
</template>

<script>
    export default {

            methods:{
                changeLanguage: function(value){
                    this.$i18n.set(value)
                },
            }
    }
</script>

<style scoped>

</style>