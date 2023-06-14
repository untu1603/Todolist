<template>
    <div class="hold-transition register-page">
        <div class="register-box">
            <div class="register-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>

            <div class="card">
                <div class="card-body register-card-body">
                    <p class="login-box-msg">Register a new membership</p>

                    <form @submit.prevent=validateForm>
                        <p class="red">{{ errors }}</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Full name" v-model="formdata.FullName">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="formdata.Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="User name" v-model="formdata.UserName">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="formdata.Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Retype password" v-model="formdata.CPassword" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <select class="form-control" placeholder="Role" v-model="formdata.Role" >
                                <option disabled value="">Please select one</option>
                                <option>USER</option>
                                <option>LEADER</option>
                                <option>ADMIN</option>
                            </select>
                            <div class="input-group-text">
                                <span class="fas fa-chess-king"></span>
                            </div>
                        </div>

                        <div class="row">

                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Register</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <router-link to="login" class="text-center">I already have a membership</router-link>
                </div>

                <!-- /.form-box -->
            </div><!-- /.card -->
        </div>
    </div>
</template>

<script>
import {reactive, ref} from "vue";
import axios from "axios";
import {object} from 'yup';
import * as Yup from "yup";
import {useRouter} from "vue-router";


export default {
    name: "Register",
    emits: ['access', 'submit'],
    setup(props,{ emit }) {
        const router = useRouter();
        const formdata = reactive({
            FullName: '',
            Email: '',
            Password: '',
            CPassword:'',
            UserName: '',
            Role: "USER"
        });
        const errors=ref('');
        const data = object({
            FullName: Yup.string().required(),
            Email: Yup.string().required(),
            Password: Yup.string().required(),
            CPassword: Yup.string().required().oneOf([Yup.ref("Password"), null], "Passwords must match"),
            UserName: Yup.string().required(),
            Role: Yup.string().required()
        });
        function validateForm(){
            try {
                data.validateSync(formdata);
                ao (formdata);
                router.push({ name: "home" });
            } catch (error) {
                errors.value=error.message;
            }
        }
        async function ao(mes){
            try {
                const res= await axios.post(
                    'http://localhost:8080/api/v1/auth/register',mes)
                emit('access',res.data.access_token);
            } catch (error) {
                console.log(error)
            }
        }

        return {formdata,errors,validateForm};
    }

}
</script >

<style scoped>
.red {
    color: red;
}
</style>