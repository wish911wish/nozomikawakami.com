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
import Career from './about/Career'
import Skill from './about/Skill'
import Media from './about/Media'
import Contact from './about/Contact'

export default {
  components: {
    Career,
    Skill,
    Media,
    Contact
  }
}
</script>
