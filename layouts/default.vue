<template lang="pug">
  .screen
    NavBar
    .content
      ContactInfo
      Nuxt
</template>

<script>
export default {

}
</script>

<style lang="scss">
  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
  .page {
    margin: 0;
    width: 100%;
    padding: 1rem;
  }
  .component {
    display: flex;
    flex-direction: column;
  }
  .screen {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1 1 0;
    display: flex;
  }
</style>
