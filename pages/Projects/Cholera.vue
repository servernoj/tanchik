<template lang="pug">
  .page
    .iframe-wrapper
      iframe(
        frameborder="0",
        marginheight="0",
        marginwidth="0",
        title="Data Visualization",
        allowtransparency="true",
        allowfullscreen,
        data-v-41b90765,
        :src="`https://public.tableau.com/views/Cholera_world_stat/Dashboard?${query}`"
      )
</template>

<script>
export default {
  data () {
    const query = [
      ':embed=y',
      ':showVizHome=no',
      ':host_url=https://public.tableau.com/',
      ':embed_code_version=3',
      ':toolbar=yes',
      ':animate_transition=yes',
      ':display_static_image=no',
      ':display_spinner=no',
      ':display_overlay=yes',
      ':display_count=yes',
      ':language=en',
      ':loadOrderID=1'
    ].join('&')
    return {
      query
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    .iframe-wrapper {
      width: calc(100% - 48px);
      display: block;
      margin: 0 auto;
      iframe {
        display: block;
        width: 1020px;
        height: 679px;
        visibility: visible;
        margin: 0 auto;
      }
    }
  }
</style>
