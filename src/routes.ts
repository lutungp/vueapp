import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'

export const routes = {
  '/home': {
    component: HomePage,
    meta: { needsAuth: true }
  },
  '/login': {
    component: LoginPage,
    meta: { needsAuth: false }
  },
}