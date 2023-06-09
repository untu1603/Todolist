<template>
    <div class="hold-transition register-page">
        <div class="register-box">
            <div class="register-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>

            <div class="card">
                <div class="card-body register-card-body">
                    <p class="login-box-msg">Register a new membership</p>

                    <form @submit.prevent=onSubmit>
                        <p>{{ access_token }}</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Full name" v-model="FullName">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="User name" v-model="UserName">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Retype password" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <select class="form-control" placeholder="Role" v-model="Role" >
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
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                                    <label for="agreeTerms">
                                        I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
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
import {ref} from "vue";
import axios from "axios";

export default {
    name: "Register",
    setup() {
        const FullName = ref("");
        const Email = ref("");
        const Password = ref("");
        const UserName = ref("");
        const Role=ref("USER")
        async function onSubmit() {
            const data = {
                FullName: FullName.value,
                Email: Email.value,
                Password: Password.value,
                UserName: UserName.value,
                Role: Role.value
            };
            await ao(data);
        }
        let access_token=ref('');
        async function ao(mes){
            try {
                const res= await axios.post(
                    'http://localhost:8080/api/v1/auth/register',mes)
                access_token.value=res.data.access_token;


            } catch (error) {
                console.log(error)
            }
        }

        return {FullName,Email,Password,UserName,access_token,Role,onSubmit};
    }
}


</script>

<style scoped>

</style>