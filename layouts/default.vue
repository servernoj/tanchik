<template lang="pug">
  .screen
    NavBar
    .main
      ContactInfo
      .content
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
  html,
  body,
  #__nuxt,
  #__layout {
    height: 100%
  }
  .screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
      flex: 1 1 0;
      display: flex;
      overflow-y: hidden;
      .content {
        height: 100%;
        overflow-y: auto;
        margin: 0;
        width: 100%;
        padding: 1rem;
      }
    }
  }
</style>
