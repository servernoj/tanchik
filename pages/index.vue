<template lang="pug">
  .container
    p Boo
    NuxtLink(to='/about') About
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: grid;
    place-content: center;
  }
</style>
