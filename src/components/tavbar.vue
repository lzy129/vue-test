<template>
<van-nav-bar title="罗森宅配" >
  <van-dropdown-menu  slot="left">
  <van-dropdown-item v-model="value1" :options="option1" />
  </van-dropdown-menu>

  <van-icon name="search" slot="right" style="font-size: 5vw;" />
</van-nav-bar>
</template>

<script>
import tavbar from './tavbar'
export default {
  name: 'tavbar',
  data () {
    return {
     value1: 0,
      option1: [
        { text: '菜单', value: 0 },
        { text: '1', value: 1 },
        { text: '2', value: 2 }
      ],
    }
  },
methods:{
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>