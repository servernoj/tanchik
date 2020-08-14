<template lang="pug">
  .page
    | Index page
</template>

<script>
export default {
  data () {
    return {
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        email: 'tatiana.v.baeva@gmail.com',
        jobTitle: 'Data Analyst'
      }
    }
  },
  head () {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tableauViz {
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
  }
</style>
