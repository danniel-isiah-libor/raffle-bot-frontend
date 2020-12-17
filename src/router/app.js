const Home = () => import('../pages/Home')

const Task = () => import('../pages/Task')
const Profiles = () => import('../pages/Profiles')
const Proxies = () => import('../pages/Proxies')
const Settings = () => import('../pages/Settings')

/**
 * =======================================================================
 * App routes
 * =======================================================================
 *
 * Lazy loads component to initial page load improve performance.
 * Lazy load components are only loaded when a user is entering the route.
 * Access to this routes require user to be authenticated.
 *
 * =======================================================================
 */
export default {
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Task',
          component: Task
        },
        {
          path: '/profiles',
          name: 'Profiles',
          component: Profiles
        },
        {
          path: '/proxies',
          name: 'Proxies',
          component: Proxies
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings
        }
      ]
    }
  ]
}