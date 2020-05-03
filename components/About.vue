<template>
  <section class="works">
    <div class="contentsTtl">
      <h1>About</h1>
      <h5>My career and skills.</h5>
    </div>
    <div class="contentsInner">
      <div class="articles">
        <div class="article works">
          <Career/>
          <Skill/>
          <Media/>
          <Contact/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Career from '~/components/about/Career.vue'
import Skill from '~/components/about/Skill.vue'
import Media from '~/components/about/Media.vue'
import Contact from '~/components/about/Contact.vue'

@Component({
  components: {
    Career,
    Skill,
    Media,
    Contact,
  }
})

export default class About extends Vue {}
</script>
