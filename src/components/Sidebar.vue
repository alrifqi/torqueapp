<template>
  <div class="sidebar-content">
    <sidebar-menu :menu="menu" :theme="theme"/>
  </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu'
  export default {
    name: 'Sidebar',
    data() {
      return {
        menu: [
            {
                header: true,
                title: 'Main Navigation',
            },
            {
                href: '/',
                title: 'Dashboard',
            }
        ],
        theme: 'white-theme'
      }
    }
  }
</script>

<style scope="local">
  .sidebar-content {
    height: 80%;
    margin-top: 10%;
  }
</style>

<style>
  .vsm-list {
    padding-top: 15%;
    border-right: 1px solid #ddd;
  }
</style>