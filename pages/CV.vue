<template lang="pug">
  .page.cv
    .top
      h2 CV
      a(
        href="/Resume Baeva.docx",
        target="_blank",
        download="Tatiana_Baeva_(data_analyst)_cv.docx"
      ) download
    .block
      .label
        strong Qualifications
        strong Summary
      .content
        p.
          Data Analyst with substantial industry experience. Proven ability in analyzing and managing data to support operational goals. Conducts historical research on large data sets to identify data trends and issues. Skilled in mining data and building data models with Python. Designs dashboards, reports, and tools to improve work flows and process efficiency. Knowledgeable in database administration of SQL and MySQL databases.

</template>

<script>
export default {
  // layout: 'no-contact-info'
}
</script>

<style lang="scss" scoped>
  .cv {
    .top {
      display: flex;
      justify-content: space-between;
      h2 {
        border-bottom: 1px solid #aaa;
        padding-bottom: 1rem;
        width: 200px;
      }
    }
    .block {
      display: flex;
      .content {
        flex: 1 1 0;
      }
      .label {
        width: 150px;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
