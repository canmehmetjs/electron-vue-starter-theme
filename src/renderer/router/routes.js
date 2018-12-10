// Partner Pages
import AdminLayout from '@components/admin_layout'
import Page_Home from '@views/home'
import Page_Login from '@views/login'
import Page_Dashboard from '@views/dashboard'


export default [
    {
        path: '/',
        name: 'Page_Home',
        component: Page_Home,
    },
    {
        path: '/login',
        name: 'Page_Login',
        component: Page_Login,
    },
    
    {
        path:'/app',
        name: 'AdminLayout',
        component: AdminLayout,
        meta: {
            authRequired: true,
            layout: 'default'
        }, 
        children: [
            {
                path: '/dashboard',
                name: 'Page_Dashboard',
                component: Page_Dashboard
            }
        ]
    },
    {
      path: '/404',
      name: '404',
      component: require('@views/404').default,
      meta: {
        authRequired: false,
        layout: 'default'
      }, 
      // Allows props to be passed to the 404 page through route
      // params, such as `resource` to define what wasn't found.
      props: true,
    },
    // Redirect any unmatched routes to the 404 page. This may
    // require some server configuration to work in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    {
      path: '*',
      redirect: '404',
    },
  ]