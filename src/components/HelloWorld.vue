<template>
  <div id="wrap">
    <section id="mainVisual">
      <div class="scroll">
        <div>
          <div>scroll</div>
          <a class="arrow"></a>
        </div>
      </div>
    </section>
    <transition>
      <div class="top" v-if="show">
        <div class="contentsTtl">
          <h1>Be honest with myself.</h1>
          <h5>Nozomi Kawakami</h5>
        </div>
        <div class="topGlobalNav">
          <ul class="contentsList">
            <li class="contentsListItem" @click="show = !show; show_works = !show_works;">
              <div class="works">
                Works
              </div>
            </li>
            <li>
              <div class="about">
                About
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition>
      <section class="works" v-if="show_works">
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
    </transition>
  </div>
</template>

<script>
import works from './works'

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

#wrap{
  position: relative;
  height: 100vh;
}

#mainVisual{
  width: 100vw;
  height: 100vh;
}

.v-enter {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: opacity 300ms ease-out;
}

.v-leave {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
}

.v-leave-active {
  transition: opacity 300ms ease-out;
}

.top{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.contentsTtl{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  top: 50%;
  left: 0;
  margin-top: -8rem;
}

.contentsTtl h1{
  font-size: 6rem;
  font-weight: bold;
}

.contentsTtl h5{
  margin-top: 3rem;
  font-size: 3rem;
  font-weight: normal;
}

@media screen and (max-width: 900px) {
  .contentsTtl{
    margin-top: -6rem;
  }

  .contentsTtl h1{
    font-size: 3rem;
    font-weight: bold;
  }

  .contentsTtl h5{
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: normal;
  }
}

.topGlobalNav{
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 15%;
  width: 100%;
  justify-content: center;
}

.topGlobalNav li{
  display: inline-block;
  font-size: 3rem;
  font-weight: normal;
  margin: 1rem;
  position: relative;
  width: 20rem;
  overflow: hidden;
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .topGlobalNav li{
    font-size: 2rem;
    width: 10rem;
  }
}

.contentsList li::before, .contentsList li::after {
  background-color: rgba(0,0,0, 0.6);
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform 0.5s,
              cubic-bezier(0.19, 1, 0.22, 1),
              color 0.5s,
              transition-delay 0s;
}

.contentsList li::before {
  transform: translateX(104%);
}

.contentsList li::after {
  transform: translateX(-104%);
}

.contentsList li div{
  position: relative;
  z-index: 3;
}

.contentsList li:hover div{
  color: #FFF;
}

.contentsList li:hover:before {
  transform: translateX(0);
}

.contentsList li:hover:after {
  transform: translateX(0);
}

.scroll{
  position: absolute;
  bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
}

.scroll div{
  font-size: 2rem;
}

.arrow{
  position: absolute;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 3px solid #2c3e50;
  border-bottom: 3px solid#2c3e50;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 1.5s infinite;
  animation: sdb 1.5s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

.articleImage{
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.articleImage:before{
  content:"";
  display: block;
  padding-top: 50%;
  box-shadow: 0 0 0 1px #ddd;
}

.imageCover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.objectFit-contain{
  object-fit: contain;
}

.objectFit-cover{
  object-fit: cover;
}

.articles{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.article{
  width: 80%;
  max-width: 800px;
  margin-top: 6rem;
}

.articleTtl{
  width: 100%;
  margin: 0 0 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 4rem;
  padding: 7px 15px 5px;
  color: #2c3e50;
  text-align: left;
  box-sizing: border-box;
}

.articleDescription{
  font-size: 2rem;
  text-align: left;
}

.description h3{
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: .5rem;
}

.description p{
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
}

</style>
