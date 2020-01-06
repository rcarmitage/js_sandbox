<template>
  <header class="header">
    <h1 >Events Practise</h1>
    <div id="nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/test_view_01" class="nav-item">Test View 01</router-link>
      <router-link to="/test_view_02" class="nav-item">Test View 02</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  color: #713e5a;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #713e5a;
  padding-right: 5px;
  text-decoration: none;
}

.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}
</style>