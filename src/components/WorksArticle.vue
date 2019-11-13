<template>
  <div class="article works">
    <h2 class="articleTtl">
      {{ article.articleTitle }}
    </h2>
    <div class="articleImage">
      <a :href="article.siteURL">
        <img class="imageCover objectFit-contain" :src="article.imageURL"/>
      </a>
    </div>
    <div class="articleDescription description">
      <h5 class="heading">
        URL
      </h5>
      <a :href="article.siteURL">
        <p>
          {{ article.siteURL }}
        </p>
      </a>
      <h5>
        Summary
      </h5>
      <p>
        {{ article.summary }}
      </p>
      <h5>
        Tool
      </h5>
      <p>
        {{ article.tool }}
      </p>
      <h5>
        Period
      </h5>
      <p>
        {{ article.period }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
