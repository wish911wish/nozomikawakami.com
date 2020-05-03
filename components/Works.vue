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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WorksArticle from '~/components/WorksArticle.vue'

@Component({
  components: {
    WorksArticle,
  }
})

export default class Works extends Vue {

  articles: {
    id: number
    articleTitle: string
    siteURL: string
    imageURL: string
    summary: string
    tool: string
    period: string
  }[] = [
    {
      id: 1,
      articleTitle: 'WANNAME',
      siteURL: 'https://www.wanname.net/',
      imageURL: 'https://portfolio50.s3-ap-northeast-1.amazonaws.com/static/wanname.png',
      summary: 'ヘアスタイリスト向けマッチンングアプリ "WANNAME"の開発に参画。サーバサイド・フロントエンドを担当。',
      tool: 'Ruby on Rails / HTML / SCSS / Vue.js / Git',
      period: '2019.8 ~ 2019.11'
    },
    {
      id: 2,
      articleTitle: '出欠管理サービス（作成中）',
      siteURL: 'https://ulta-80701.firebaseapp.com',
      imageURL: 'https://i.gyazo.com/6963c1735ff83caa08317235126d6d4b.png',
      summary: 'アルティメットというスポーツを楽しむ人向けのサービス。各チームの練習の出欠管理や、チーム同士の練習試合などを管理するためのプラットフォーム。',
      tool: 'Vue.js(Nuxt.js) / Vuetify / Firebase / CircleCI / Git',
      period: '2019.12 ~ 作成中'
    },
    {
      id: 3,
      articleTitle: '試作ポートフォリオサイト 01',
      siteURL: 'http://portfolio02fluid.s3-website-ap-northeast-1.amazonaws.com/',
      imageURL: 'https://portfolio50.s3-ap-northeast-1.amazonaws.com/static/portfolio01.png',
      summary: 'アニメーション用ライブラリ(GSAP)の練習用。',
      tool: 'HTML / CSS / GSAP(MorphSVGPlugin.js, TweenLite.js) / Git',
      period: '2019.8'
    },
    {
      id: 4,
      articleTitle: '試作ポートフォリオサイト 02',
      siteURL: 'http://portfolio05-vue-todo.s3-website-ap-northeast-1.amazonaws.com/',
      imageURL: 'https://portfolio50.s3-ap-northeast-1.amazonaws.com/static/portfolio02.png',
      summary: 'canvasタグを使用したアニメーションの練習用',
      tool: 'HTML / CSS / GSAP(MorphSVGPlugin.js, TweenLite.js) / Git',
      period: '2019.9'
    }
  ]
}

</script>
