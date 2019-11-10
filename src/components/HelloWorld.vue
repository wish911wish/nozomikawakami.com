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
      </section>
    </transition>
  </div>
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
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
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

</style>
