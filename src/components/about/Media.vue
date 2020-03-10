<template>
  <div>
    <h2 class="articleTtl">
      Media
    </h2>
    <div v-for="link in links" :key="link.id" class="career about-section">
      <div class="name">
        {{ link.name }}
      </div>
      <a class="url" :href="link.url">
        {{ link.url }}
      </a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      links: [
        {
          id: 1,
          name: 'Qiita',
          url: 'https://qiita.com/nozomi53motomachi'
        },
        {
          id: 2,
          name: 'GitHub',
          url: 'https://github.com/wish911wish'
        }
      ]
    }
  }
}
</script>

<style scoped>

.name{
  font-size: 2rem;
  margin-bottom: 1rem;
}

.url{
  font-size: 1.5rem;
  padding: 0 2rem;
}
</style>
