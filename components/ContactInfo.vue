<template lang="pug">
  .component.contact-info.is-hidden-mobile
    .top
      h4 Data Analyst
    .bottom
      h4 Contact Info
      address
        a(href="tel:6692549436")
          fa-icon(:icon="['fas','phone']")
          span.ml-3 (669) 254-9436
        br
        a(
          href="mailto:tatiana.v.baeva@gmail.com?subject=Reference from portfolio website",
        )
          fa-icon(:icon="['far','envelope']")
          span.ml-3 tatiana.v.baeva at gmail dot com
        br
        a(
          href="https://www.linkedin.com/in/tatiana-baeva/",
          target="_blank"
        )
          fa-icon(:icon="['fab','linkedin']")
          span.ml-3 tatiana-baeva
</template>

<style lang="scss" scoped>
  .contact-info {
    min-width: max-content;
    padding: 1rem;
    border-right: 1px solid #eee;
    justify-content: space-between;
  }
</style>
