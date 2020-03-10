<template>
  <div class="contentsListItem">
    <div class="itemName" v-bind:class="itemName" >
      {{ itemName }}
    </div>
  </div>
</template>

<script>

export default {
  props: ['itemName'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.contentsListItem{
  position: relative;
  z-index: 3;
  overflow: hidden;
}

.contentsListItem:hover {
  color: #FFF;
}

.contentsListItem::before, .contentsListItem::after{
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

.itemName{
  position: relative;
  z-index: 3;
}

.contentsListItem::before{
  transform: translateX(104%);
}

.contentsListItem::after{
  transform: translateX(-104%);
}

.contentsListItem:hover::after{
  transform: translateX(0);
}

.contentsListItem:hover::before{
  transform: translateX(0);
}

</style>
