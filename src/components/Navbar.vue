<template>
  <div>
    <b-navbar toggleable="lg" class="navbar-white">
      <div class="icon"></div>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scope="local">
  .navbar-white {
    border-bottom: 1px solid #ddd;
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
  }
  .icon {
    width: 60px;
    height: 5vh;
    border-right: 1px solid #ddd;
    margin-right: 10px;
  }
</style>