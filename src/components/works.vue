<template>
  <section class="works">
    <div class="contentsTtl">
      <h1>Works</h1>
      <h5>My private works.</h5>
    </div>
    <div class="contentsInner">
      <div class="articles">
        <div class="article works">
          <h2 class="articleTtl">WANNAME</h2>
          <div class="articleImage">
            <a href="https://www.wanname.net/">
              <img class="imageCover objectFit-contain" src="../assets/wanname.png"/>
            </a>
          </div>
          <div class="articleDescription description">
            <h3 class="heading">
              URL
            </h3>
            <a href="https://www.wanname.net/">
              <p>
                https://www.wanname.net/
              </p>
            </a>
            <h3 class="">
              Summary
            </h3>
            <p>
              ヘアスタイリスト向けマッチンングアプリ "WANNAME"の開発に参画。サーバサイド・フロントエンドを担当。
            </p>
            <h3>
              Tool
            </h3>
            <p>
              Ruby on Rails / HTML / SCSS / Vue.js / Git
            </p>
            <h3>
              Period
            </h3>
            <p>
              2019.8 ~ 2019.11
            </p>
          </div>
        </div>
        <div class="article works">
          <h2 class="articleTtl">WANNAME</h2>
          <div class="articleImage">
            <a href="http://portfolio02fluid.s3-website-ap-northeast-1.amazonaws.com/">
              <img class="imageCover objectFit-cover" src="../assets/portfolio01.png"/>
            </a>
          </div>
          <div class="articleDescription description">
            <h3 class="heading">
              URL
            </h3>
            <a href="http://portfolio02fluid.s3-website-ap-northeast-1.amazonaws.com/">
              <p>
                http://portfolio02fluid.s3-website-ap-northeast-1.amazonaws.com/
              </p>
            </a>
            <h3 class="">
              Summary
            </h3>
            <p>
              ヘアスタイリスト向けマッチンングアプリ "WANNAME"の開発に参画。サーバサイド・フロントエンドを担当。
            </p>
            <h3>
              Tool
            </h3>
            <p>
              Ruby on Rails / HTML / SCSS / Vue.js / Git
            </p>
            <h3>
              Period
            </h3>
            <p>
              2019.8 ~ 2019.11
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      show_works: false,
      opacity: 1
    }
  },
  methods: {
    test: function () {
      this.opacity = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
