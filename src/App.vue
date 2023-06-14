<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      
      <Preloader></Preloader>
      <Navbar></Navbar>
      <Sidebar :tokenlogin="tokenlogin"></Sidebar>

      <div class="content-wrapper">
        
<!--        <ContentHeader></ContentHeader>-->

        <section class="content">
          <div class="container-fluid">
              <router-view @access="handleEvent"></router-view>>
          </div>
        </section>
        
      </div>
      <ControlSidebar></ControlSidebar>
      
    </div>
  </body>
</template>

<script>
import $ from 'jquery'
import "../node_modules/admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css"
import "../node_modules/admin-lte/plugins/select2/css/select2.min.css"

import Preloader from "./dashboard/Preloader.vue"
// import ContentHeader from "./dashboard/ContentHeader.vue"
// import ExampleForm from "./components/ExampleForm.vue"
import Navbar from "./dashboard/Navbar.vue";
import Sidebar from "./dashboard/Sidebar.vue";
import ControlSidebar from "./dashboard/ControlSidebar.vue"
import {onMounted, ref} from "vue";


export default {
  name: "App",
  components: {
    Preloader,
    // ContentHeader,
    // ExampleForm,
    Navbar,
    Sidebar,
    ControlSidebar
  },
    setup() {
        const showsignz = ref(false);
        const tokenlogin= ref('');
        const userId=ref('')
        const handleEvent = (data) => {
            tokenlogin.value=data
        };

        const initializeSelect2 = () => {
            // Initialize Select2 Elements
            $(".select2").select2();

            // Initialize Select2 Elements with Bootstrap 4 theme
            $(".select2bs4").select2({
                theme: "bootstrap4",
            });
        };

        onMounted(initializeSelect2);

        return {
            showsignz,
            tokenlogin,
            userId,
            handleEvent
        };
    }
};
</script>

<style>
</style>
