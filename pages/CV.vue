<template lang="pug">
  .page.cv.container.is-widescreen
    .top
      h2 CV
      a(
        href="/Resume Baeva.docx",
        target="_blank",
        download="Tatiana_Baeva_(data_analyst)_cv.docx"
      )
        fa-icon(:icon="['fas','download']")
        span.ml-3 Download
    .block.first.is-flex-tablet
      .label.heading
        strong Qualifications
        strong.is-hidden-mobile Summary
      .info
        p.
          Data Analyst with substantial industry experience. Proven ability in analyzing and managing data to support operational goals. Conducts historical research on large data sets to identify data trends and issues. Skilled in mining data and building data models with Python. Designs dashboards, reports, and tools to improve work flows and process efficiency. Knowledgeable in database administration of SQL and MySQL databases.
        p.heading Core Competencies
        ul.list.is-flex-desktop
          li Data Analysis and Reporting
          li Data Modeling and Visualization
          li Machine Learning
          li Database Management
          li Project Management
          li Big Data and Analytics
          li Data Mining Techniques
          li Extract, Transform, and Load (ETL)
          li Process Automation and Improvement
          li Data Solutions
        p.heading Technical Proficiencies
        dl
          dt DBMS
          dd SQL Server, MySQL, MongoDB
          dt Programming
          dd Python, SQL
          dt Tools
          dd Tableau, PowerBI, Microsoft Excel, SSRS, Voila, ELK Stack
    .block.is-flex-tablet
      .label.heading
        strong Career
        strong.is-hidden-mobile Experience
      .info
        .item
          p.header.is-size-7-mobile
            strong Data Analyst,
            | &nbsp; Mueller Water Products, San Jose, CA
            br
            | (February 2019 – Present)
          p.
            Analyzed and maintained the largest site of water leak detection sensors with 6,000 nodes as of June 2020 and an expected 8,000 nodes by 2021. Review and classify daily leak alert data to identify items worthy of field investigation. Build and maintain relations with external leak detection stakeholders. Analyze and prepare leak assessments and system health reports for senior leaders and external customers. Troubleshoot and fix senor errors remotely to ensure proper functionality. Ensured compliance with company standards, contractor requirements, and environmental health and safety (EHS) policies and regulations.
          ul
            li.
              Prepared and maintained the list of sensors requiring maintenance and escalated critical issues to the Project Manager. Collaborated with field crews and external Field Specialists and Operators to perform onsite maintenance, repairs, and adjustments.
            li.
              Analyzed historical data on sensor performance to identify trends in battery, GPS, and connection errors and created and implemented a mitigation plan to resolve those issues.
            li.
              Improved the leak detection process by designing new sensor monitoring tools with refined algorithms.
            li.
              Developed and managed an effective solution to support the site firmware upgrade by clustering all installed nodes.
            li.
              Recommended and introduced a new method of textual data analysis for classifying and categorizing all reported events.
            li.
              Designed multiple dashboards, reports, and system health tools to improve site monitoring efficiency, track sensor behavior, and report water leaks to clients.
            li.
              Created client-facing reports with PowerBI to render snapshots of essential data for current site states and health.
            li.
              Take the lead role in several development projects. Built a data model based on a large set of samples for a machine learning project to make monitoring more efficient and reduce monitoring time by 70%.
            li.
              Identified specific areas of projects with issues and recommended solutions and plans for improvement.
            li.
              Successfully monitored and maintained the site, which had increased by more than 150% in only one year.
        .item
          p.header.is-size-7-mobile
            strong Web Developer | Database Administrator,
            | &nbsp; Georgia Southwestern State University, Americus, GA
            br
            | (August 2016 – October 2018)
          p.
            Maintained and further developed the University website (gsw.edu). Administered the MySQL database.
          ul
            li.
              Improved the site by creating a new visual template and redesigning the content.
            li.
              Increased website security and enhanced user experience by upgrading the site core and fixing web dependency issues.
            li.
              Recommended and implemented a new site structure that improved site navigation for users.
            li.
              Researched and integrated third-party web solutions for faculty, staff, and students.
            li.
              Developed web pages and products for various departments and university events.
            li.
              Created and supported web forms for users to register and pay for events.
    .block.is-flex-tablet
      .label.heading
        strong Education
      .info
        p.is-size-7-mobile
          strong Master of Science in Computer Science,
          | &nbsp; 2015
          br
          | Georgia Southwestern State University, Americus, GA
        p.is-size-7-mobile
          strong Master of Science in Fine Arts,
          | &nbsp; 2007
          br
          | South Ural State University, Chelyabinsk, Russia
    .block.is-flex-tablet
      .label.heading
        strong Professional Training
      .info
        ul
          li.
            Graduate Certificate in Data Management and Analytics, Kennesaw State University, 2018
          li.
            Tableau Desktop Specialist, 2018

</template>

<script>
export default {
  head () {
    return {
      title: 'CV',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Curriculum vitae presents Tatiana Baeva\'s technical skills, qualifications, professional experience, and education'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .cv {
    .top {
      display: flex;
      justify-content: space-between;
      h2 {
        border-bottom: 2px solid lightblue;
        padding-bottom: 1rem;
        width: 200px;
      }
    }
    .block {
      padding: 1rem 0;
      margin: 0;
      &:not(.first) {
        border-top: 2px solid lightblue;
      }
      .info {
        flex: 1 1 0;
        .item {
          padding: 1rem 0;
          margin: 0;
          &:not(:first-of-type) {
            border-top: 1px dashed lightblue;
          }
          .header {
            border-left: 3px solid #777;
            padding-left: 1rem;
          }
        }
        .list {
          max-width: 100%;
          flex-direction: column;
          flex-wrap: wrap;
          @media screen and (min-width: 1200px) {
            max-height: 150px;
          }
        }
        dl {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          dt {
            width: 150px;
            font-weight: bold;
          }
          dd {
            margin: 0;
            flex: 1 0 calc(100% - 150px);
          }
        }
      }
      .label {
        flex-basis: 180px;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
