<template>
  <div class="content">
    <Navbar />
    <b-container fluid>
      <b-row>
        <Sidebar class="col-md-2 d-md-block sidebar" />
        <div class="col-md-10 main">
          <Subheader />

          <Content />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import Sidebar from '../components/Sidebar.vue';
  import Subheader from "../components/Subheader.vue";
  import Content from "../components/Content.vue";

  export default {
    name: 'DefaultLayout',
    components: {
      Navbar,
      Sidebar,
      Subheader,
      Content
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }
  .sidebar {
    z-index: 1;
    padding: 70px 0 0;
    height: 100%;
  }
  .main {
    padding-left: 30px;
  }
</style>
