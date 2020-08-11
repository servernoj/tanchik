<template lang="pug">
  .component.contact-info.is-hidden-mobile
    .top
      h4 Data Analyst
    .bottom
      h4 Contact Info
      address
        a(href="tel:6692549436") Tel: (669) 254-9436
        br
        a(
          href="mailto:tatiana.v.baeva@gmail.com?subject=Reference from portfolio website",
        ) E-Mail: tatiana.v.baeva at gmail dot com
        br
        a(
          href="https://www.linkedin.com/in/tatiana-baeva/",
        ) LinkedIn: tatiana-baeva
</template>

<style lang="scss" scoped>
  .contact-info {
    min-width: max-content;
    padding: 1rem;
    border-right: 1px solid #eee;
    justify-content: space-between;
  }
</style>
