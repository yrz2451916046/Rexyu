<template>
  <div id="app">
    <mainnav></mainnav>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Foot from '@/components/Foot'

export default {
  name: 'app',
  components:{
    mainnav: Nav,
    foot: Foot
  }
}
</script>

<style>

</style>
