<template>
    <div class="hold-transition login-page">
        <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <a href="../../index2.html" class="h1"><b>Gpay</b> to do list</a>
            </div>
            <div class="card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form @submit.prevent=validateForm>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" v-model="formdata.User">
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
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <p class="mb-1">
                    <router-link to="forgot-password">I forgot my password</router-link>
                </p>
                <p class="mb-0">
                    <router-link to="register" class="text-center">Register a new membership</router-link>
                </p>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
        </div>
    </div>
</template>

<script>
import {reactive, ref} from "vue";
import {object} from "yup";
import * as Yup from "yup";
import axios from "axios";

export default {
    setup()
    {
        const formdata = reactive ({
          User:'',
          Password:''
    });
        const data = object({
            User: Yup.string().required(),
            Password: Yup.string().required()
        });
        const errors= ref('')
        const access_token= ref('')
        function validateForm(){
            try {
                data.validateSync(formdata);
                login(formdata);
            } catch (error) {
                errors.value=error.message;
            }
        }
        async function login(mes){
            try {
                const res= await axios.post(
                    'http://localhost:8080/api/v1/auth/authenticate',mes)
                access_token.value=res.data.access_token;
            } catch (error) {
                console.log(error)
            }
        }
        return{formdata,validateForm}
    }

}
</script>

<style scoped>

</style>