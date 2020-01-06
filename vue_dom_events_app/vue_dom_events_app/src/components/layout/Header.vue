<template>
  <header class="header">
    <h1 >Events Practise</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
}
</style>