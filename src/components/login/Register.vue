<template>
    <div class="hold-transition register-page">
      <div class="register-box">
        <div class="register-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Register a new membership</p>

                <form >
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Full name" v-model="FullName">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Retype password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
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
                            <button type="submit" class="btn btn-primary btn-block" >Register</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <a href="login" class="text-center">I already have a membership</a>
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
      </div>
    </div>
</template>

<script>
// import {ref} from "vue";
// import axios from "axios";

export default {
    name: "Register",
    // setup(){
    //     const FullName = ref('')
    //     const newTodo ={
    //         FullName: FullName.value
    //     }
    //
    //     const addTodo = async newTodo => {
    //         try {
    //
    //             const res = await axios.post(
    //                 'https://jsonplaceholder.typicode.com/todos',
    //                 newTodo
    //             )
    //             console.log(res.data)
    //             } catch (error) {
    //             console.log(error)
    //         }
    //
    //     }
    //
    // }
}
</script>

<style scoped>

</style>