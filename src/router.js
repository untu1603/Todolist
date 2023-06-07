import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/login/Login.vue";
import ExampleForm from "@/components/ExampleForm.vue";
import ForgotPassword from "@/components/login/ForgotPassword.vue";
import Register from "@/components/login/Register.vue";
const routes =[
    {path:'/login', component: Login},
    {path: '/home', component: ExampleForm},
    {path: '/forgot-password',component: ForgotPassword},
    {path: '/register',component: Register}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router