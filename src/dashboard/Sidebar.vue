<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4"
         @mouseenter="showsign = true"
         @mouseleave="showsign = false">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../assets/img/GpayLogo.png" alt="Gpay Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Gpay to do list</span>
    </a>
    <div class="sidebar" v-if="!isLogin">
      <a href="login" class="btn" >
        <p> Login </p>
      </a>
      <a href="signup" class="btn" >
        <p> Signup </p>
      </a>
    </div>
      <!-- Sidebar -->
    <div class="sidebar" v-if="isLogin">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../assets/img/avatar5.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Carlos Carvalho <i class="nav-icon far fa-circle text-danger"></i></a>
        </div>
      </div>



      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Danh sách công việc
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
                <a href="pages/calendar.html" class="nav-link">
                    <i class="nav-icon far fa-plus-square"></i>
                    <p>
                        Tạo công việc
                        <span class="badge badge-info right">2</span>
                    </p>
                </a>
          </li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
                Lịch sử công việc
              </p>
            </a>
          </li>
          <li class="nav-header">Các chức vụ</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-danger"></i>
              <p class="text">Admin</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-warning"></i>
              <p>Leader</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-info"></i>
              <p>Member</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  props :{

  },
  data(){
      return{
          isLogin : false


      }
  },
    methods: {

    }
}
</script>

<style>

</style>