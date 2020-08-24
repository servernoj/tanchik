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
        :src="`https://public.tableau.com/views/World_Suicide_data/Dashboard?${query}`"
      )
    p
      | Close to 800 000 people die by suicide every year. In 2017, 1.4% of global deaths was caused by suicide and it was among the top 20 reasons of deaths. Suicide rate for men is twice higher than for women. In addition, suicide rate is typically higher for older people. There are 10 to 20 million non-fatal suicide attempts every year, which can lead to injury and long-term disabilities. Suicide is the 2nd leading cause of death in the world for those aged 15-24 years. Ingestion of pesticide, hanging and firearms are among the most common methods of suicide globally. Depression and other mental disorders are the leading cause of disability worldwide.
    p
      | Suicide are preventable. There are measures that society can take like reducing access to the means of suicide, early identification and intervention, etc. as well as every individual by being aware of how often suicide happen and who is at risk. This study and dashboards were inspired by suicide prevention program and include data for over 100 countries from 1985-2015.
    p
      |  There are 4 dashboards that help understanding suicide trends. The first one includes map and top 10 countries based on suicide number: Russia, United States, Japan, etc. Map helps to see countries with the highest suicide cases and rates. Second dashboard shows overall rate trend for all countries through 30 years – one can see that the highest rate was in 1995 and as on 2015 rate is below average. Pie chart on this dashboard shows that middle age people (35-54 years) die from suicide more often. One can see that more men die from suicide than women based on stacked bar chart and this trend stays stable.
    p
      | The next dashboard compares GDP and suicide rate. 79% of suicide occur is low and middle income countries and one can see that for such countries suicide rate decreases if GDP grows (some examples include Russia, Slovenia, Kazahstan, Sri Lanka, etc). For developed countries such as United States, Netherlands, Korea suicide rate increases with growth of GDP. I personally was surprised to see that countries with high GDP have an increasing trend of suicide rate, which could be explained that there are many factors and their combination that can affect a person decision about suicide and not always financial stability can guarantee a happy life.
    p
      | The last dashboard shows overall suicide trend by age along with generation distribution. We can see that in 1990 there was an increase in number of suicide by all age groups (except 5-14) and for most of them it stayed stable until 2015. The top age group 35-54 started to show a decrease in suicide number since 2009. The original dataset included six-generation groups: G.I. Generation, Silent, Boomers, Generation X, Millennials and Generation Z. The last chart on this dashboard shows generation distribution by age groups. Since it was already discovered that the top groups by suicide number consist of people age 35-54 and 55-74 we can see that these groups mostly consist of Boomers and Silent generations. There are studies that show how changes in economy affect these generations and such data can be used in suicide prevention among these groups. It’s also interesting to note that Boomers generation had a high suicide rate when they were younger and some researchers suggest that when boomers have troubles today they react in familiar way.
    ul
      li
        |
        a(href="https://www.who.int/news-room/fact-sheets/detail/suicide") Suicide article
      li
        |
        a(href="https://ourworldindata.org/suicide") Suicide article 2
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
