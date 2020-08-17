<template lang="pug">
  nav.navbar.is-light(
    role="navigation",
    aria-label="main navigation"
  )
    .navbar-brand
      NuxtLink.navbar-item.name(
        to="/"
      )
        h2.is-size-5.has-text-grey-dark.is-family-secondary Tatiana Baeva
      a.navbar-burger(
        role="button",
        aria-label="menu",
        :aria-expanded="isActive",
        :class="{'is-active': isActive}",
        @click="toggle"
      )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")

    .navbar-menu(
      :class="{'is-active': isActive}"
      @click="toggle"
    )
      .navbar-start
      .navbar-end
        NuxtLink.navbar-item(
          to="/CV"
        ) CV
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Projects
          .navbar-dropdown
            NuxtLink.navbar-item(
              to="/Projects/Cholera"
            ) Cholera cases in the World
            NuxtLink.navbar-item(
              to="/Projects/B"
            ) B
            NuxtLink.navbar-item(
              to="/Projects/C"
            ) C
        NuxtLink.navbar-item(
          to="/ContactForm"
        ) Contact form
        NuxtLink.navbar-item(
          to="/About"
        ) About
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
  .navbar-brand {
    .name {
      margin: 0;
      padding: 0 1rem;
      .text {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }
</style>
