<template>
  <div id="app">
    <div class="grid-container">
          <div class="item1">
            <Button  who="Index"></Button>
            
            <Button who="Theorie"></Button>
            <Button who="Übungen"></Button>
            <Button who="Quellen"></Button>
            <Button who="Einstellungen (?)"></Button>

          </div>

          
          <!-- <div class="item2"> -->

 

            <!-- <test 
              v-for="exercise in exercises" 
              v-bind:key="exercise.id"
              v-bind:title="exercise.title"
              ></test> -->

          <!-- </div>
          <div id="main" class="item3"><test title="Main"/></div>  
          <div class="item4">Right</div> -->
         <!-- <div class="item5">Footer</div> -->
        </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import test from "./components/test.vue"
import Button from "./components/Button.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld
    // test,
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import "./assets/style.css"
</style>


