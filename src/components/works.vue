<template>
  <section class="works">
    <div class="contentsTtl">
      <h1>Works</h1>
      <h5>My private works.</h5>
    </div>
    <div class="contentsInner">
      <div class="articles">
        <WorksArticle v-for="article in articles" :article="article" :key="article.id"/>
      </div>
    </div>
  </section>
</template>

<script>
import WorksArticle from './WorksArticle'

export default {
  components: {
    WorksArticle
  },
  data () {
    return {
      articles: [
        {
          id: 1,
          articleTitle: 'WANNAME',
          siteURL: 'https://www.wanname.net/',
          imageURL: 'https://portfolio50.s3-ap-northeast-1.amazonaws.com/static/images/wanname.png',
          summary: 'ヘアスタイリスト向けマッチンングアプリ "WANNAME"の開発に参画。サーバサイド・フロントエンドを担当。',
          tool: 'Ruby on Rails / HTML / SCSS / Vue.js / Git',
          period: '2019.8 ~ 2019.11'
        },
        {
          id: 2,
          articleTitle: '試作ポートフォリオサイト 01',
          siteURL: 'http://portfolio02fluid.s3-website-ap-northeast-1.amazonaws.com/',
          imageURL: 'https://portfolio50.s3-ap-northeast-1.amazonaws.com/static/images/portfolio01.png',
          summary: 'アニメーション用ライブラリ(GSAP)の練習用。',
          tool: 'HTML / CSS / GSAP(MorphSVGPlugin.js, TweenLite.js) / Git',
          period: '2019.8'
        },
        {
          id: 3,
          articleTitle: '試作ポートフォリオサイト 02',
          siteURL: 'http://portfolio05-vue-todo.s3-website-ap-northeast-1.amazonaws.com/',
          imageURL: 'https://portfolio50.s3-ap-northeast-1.amazonaws.com/static/images/portfolio02.png',
          summary: 'canvasタグを使用したアニメーションの練習用',
          tool: 'HTML / CSS / GSAP(MorphSVGPlugin.js, TweenLite.js) / Git',
          period: '2019.9'
        }
      ]
    }
  }
}
</script>
