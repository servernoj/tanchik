<template lang="pug">
  .page.contact-form
    form.form(
      method="post",
      name="contact-form",
      data-netlify="true",
      data-netlify-honeypot="bot-field"
    )
      input(
        type="hidden",
        name="form-name",
        value="contact-form"
      )
      .field
        label.label Name
        .control
          input.input(
            type="text",
            name="name",
            placeholder="your name"
          )
      .field
        label.label Company Name
        .control
          input.input(
            type="text",
            name="company",
            placeholder="your company"
          )
      .field
        label.label Email
        .control
          input.input(
            type="email",
            name="email",
            placeholder="your e-mail"
          )
      .field
        label.label Message
        .control
          textarea.textarea(
            name="message",
            placeholder="type in your message",
            rows="10"
          )
      .buttons
        .buttons__left
        .buttons__right
          .field
            .control
              button.button.is-link.is-light(
                type="submit"
              ) Send message
</template>

<style lang="scss" scoped>
  .page.contact-form {
    max-width: 700px;
    .buttons {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
