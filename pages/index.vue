<template>
  <div id="app">
    <div id="wrap">
      <header class="globalHeader" v-show="!show">
        <div class="headerInner">
          <div class="headerIcon">
          </div>
          <div>
            <ul class="headerNavList">
              <li class="headerNavItem" @click="show = true; show_works = false; show_about=false">
                <ListItem itemName="Top"/>
              </li>
              <li class="headerNavItem" @click="activeSelfWork()">
                <ListItem itemName="Works"/>
              </li>
              <li class="headerNavItem" @click="activeSelfAbout()">
                <ListItem itemName="About"/>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section id="mainVisual">
        <div class="scroll" v-if="show_works || show_about ">
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
              <li @click="activeSelfWork()">
                <ListItem itemName="Works"/>
              </li>
              <li @click="activeSelfAbout()">
                <ListItem itemName="About"/>
              </li>
            </ul>
          </div>
        </div>
      </transition>
      <transition>
        <works v-if="show_works"/>
      </transition>
      <transition>
        <About v-if="show_about"/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Works from '~/components/Works.vue'
import About from '~/components/About.vue'
import ListItem from '~/components/ListItem.vue'

@Component({
  components: {
    Works,
    About,
    ListItem
  }
})

export default class Index extends Vue {

  msg: string = 'Welcome to Your Vue.js App'
  show: boolean = true
  show_works: boolean = false
  show_about: boolean = false
  opacity: number = 1

  activeSelfWork () {
    this.removeActive()
    var target = document.getElementsByClassName('Works')[0]
    target.classList.add('active')
    this.show = false
    this.show_works = true
    this.show_about = false
  }
  activeSelfAbout () {
    this.removeActive()
    document.getElementsByClassName('About')[0].classList.add('active')
    this.show = false
    this.show_works = false
    this.show_about = true
  }
  removeActive () {
    var beforeTarget = document.getElementsByClassName('active')[0]
    if (beforeTarget !== undefined) {
      beforeTarget.classList.remove('active')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html { font-size: 62.5%; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  font-size: 1.0rem;
}
ol, ul {
  list-style: none;
}
textarea {
  resize: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

body {
  position: relative;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

a{
  color: #2c3e50;
}

.globalHeader{
  position: fixed;
  top: 0;
  width: 100%;
}

.headerIcon{
  display: flex;
  align-items: center;
  margin-left: 2rem;
}

.headerInner{
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
}

.headerNavList{
  display: flex;
}

.headerNavItem{
  width: 6rem;
}

.headerNavItem {
  font-size: 1.5rem;
  margin: 2rem;
}

.contentsListItem .active{
  background-color: #2c3e50;
  color: white;
}

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

.globalHeader{
  z-index: 3;
}

.contentsList{
  display: flex;
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
  font-size: 3rem;
  padding: 7px 0 5px;
  color: #2c3e50;
  text-align: left;
  box-sizing: border-box;
}

.articleDescription{
  font-size: 2rem;
  text-align: left;
  margin-bottom: 6rem;
}

.description h5{
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: .5rem;
}

.description h5 {
  margin-bottom: 1rem;
}

.description h4 {
  margin-top: 1rem;
}

.description p{
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  line-height: 2.5rem;
}

.description a{
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  line-height: 2.5rem;
}

.mb-1{
  margin-bottom: 1rem;
}

.about-section{
  margin-bottom: 2rem;
  text-align: left;
  padding: 0 2rem;
}

</style>
