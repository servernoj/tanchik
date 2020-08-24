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
    p
      | This study along with a dashboard is an attempt to spread awareness of cholera disease. I strongly believe that visualizing data can deliver a message in a better way but before moving on to the dashboard itself it’s important to outline some historical data related to cholera.
    p
      | Cholera has been around for many centuries - early texts from India (by Sushruta Samhita in the 5th century B.C.) and Greece (Hippocrates in the 4th century B.C. and Aretaeus of Cappadocia in the 1st century A.D.) describe isolated cases of cholera-like illnesses. Cholera is rare in the developed world yet some areas are getting affected by it pretty hard even in 21st century (Africa and Southeast Asia). One to four million people get affected by cholera worldwide with 21,000 – 143,000 deaths per year. The risk of death among affected people is less than 5% but may be as high as 50% without treatment. Cholera is spread mostly by consuming unsafe water and or contaminated food. Risk factors include poor sanitation, limited or no access to clean drinking water and poverty. Cholera outbreaks can also be caused by catastrophic events such as earthquakes and hurricanes when people have problem accessing fresh water.  Children and people who are malnourished or immune-compromised are at higher risk to get affected by cholera. In 2017, 1 227 391 cases were notified from 34 countries, including 5654 deaths. In the same year WHO released a global strategy on cholera control with a target to reduce cholera deaths by 90% by 2030. It is important to note that cholera can be treated by ORS (oral rehydration salt) and is severe cases combination of ORS and antibiotics.
    p
      |  The dataset used for Cholera dashboard was taken from kaggle
      a(href="https://www.kaggle.com/imdevskp/cholera-dataset") Cholera Dataset
      | and has historical data from 1949 – 2016 for over 163 countries. This dashboard consist of a map with visual representation of number of cases and total deaths. The top row shows statistics with total cases, deaths and fatality rate – these numbers also change based on values selected in both filters. It also shows a bar chart of top countries with reported cases and deaths. There are two filters that can be used to select data – country and year. By selecting different dates one can see where the most cases happen – for example major cholera outbreak that happen in Haiti in 2010 after an earthquake.
    p
      | When I first started to work with this dataset, I thought that the higher fatality rate will be in countries where most cases where reported but I was surprised to see that it was not always true. The second from the top country with the most cases from 1949 – 2016 was Haiti but fatality rate is 1.18. Bangladesh on the other hand had 294,647 cases but the fatality rate is 46.64. Fatality rate is really high for Southeast Asia and Africa which can be explained by the lack of basic health care and simple treatment of rehydration therapy.
    ul
      li
        |
        a(href="https://www.kaggle.com/imdevskp/cholera-dataset") Cholera Dataset
      li
        |
        a(href="https://www.who.int/news-room/fact-sheets/detail/cholera") World Health Organization
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
