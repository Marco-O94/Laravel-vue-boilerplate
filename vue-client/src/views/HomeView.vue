<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created() {
    EventService.getEvents()
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log('C\'è stato un errore: ', error.response)
      })
  }
}
</script>
