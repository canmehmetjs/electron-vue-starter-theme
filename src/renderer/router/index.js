import Vue from 'vue'
import VueRouter from 'vue-router'

// Bootstrap 
import BootstrapVue from 'bootstrap-vue'

// Use vee validate
import VeeValidate from 'vee-validate';
// Don't inject veevalidate everywhere, we will need it only on some pages 
Vue.use(VeeValidate, { inject: false });

// Adds a loading bar at the top during page loads.
import NProgress from 'nprogress/nprogress'

// Routes definitions go here.
import routes from '@router/routes'

// Store
import store from '@store'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    // Use the HTML5 history API (i.e. normal-looking routes)
    // instead of routes with hashes (e.g. example.com/#/about).
    // This may require some server configuration in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    mode: 'history',
    // Simulate native-like scroll behavior when navigating to a new
    // route and using back/forward buttons.
    
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
            return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
})

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start()
  }

  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some(route => route.meta.authRequired)

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next()
  
  
  

  // If auth is required and the user is logged in...
  if (store.getters['auth/loggedIn']) {
    return next() 
  }else{
    redirectToLogin()
  }


  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin()

  function redirectToLogin() {
    // Pass the original route to the login component
    next({ path: '/register'})
  }

})

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
// Complete the animation of the route progress bar.
  NProgress.done()
})


export default router 