<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    getDetails() {
      this.$request({
        method: 'get',
        url: 'doctor/detail',
        data: {
          doctorId: 1
        }
      }).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getDetails()
  }
}
</script>

<style lang='scss'>
@import '@/styles/index.scss';
.home {
  text-align: center;
}
</style>

