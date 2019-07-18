<template>
  <div class="subheader-container">
    <div>Dashboard</div>
    <div>Asset Health</div>
    <div>Work Orders</div>
  </div>
</template>

<script>
  export default {
    name: 'Subheader'
  }
</script>

<style scoped>
  .subheader-container {
    display: flex;
    flex-flow: row;
  }

  .subheader-container > div {
    padding: 0 10px;
  }
</style>