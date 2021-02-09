<template>
    <nav class="subContainer"> 
        <ul>
            <li v-for="info in infos" :key="info.title" @click="change(info)" class="subitems">
                {{info}}
            </li>
        </ul>        
    </nav>
</template>

<script>
export default {
    name: "Menu",
    props: {
        infos: Array
    },
    methods: {
        change(payload) {
            this.$emit("update-main", payload)
        }
    }
}
</script>

<style scoped>


/*              Animation                */
/* https://webdeasy.de/top-css-buttons/ */

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  
  100% {
    transform: translateX(0);
  }
}
.subitems {
  color: #FFF;
  transition: all 0.3s;
  position: relative;
  height: 50px;

    font-size: 20px;
  margin: 5px;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  list-style-type: none;
  
}
.subitems span {
  transition: all 0.3s;
}
.subitems::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: red;
  border-bottom-color: red;
  transform: scale(0.1, 1);
}
.subitems:hover span {
  letter-spacing: 2px;
}
.subitems:hover::before {
  opacity: 1; 
  transform: scale(1, 1); 
}
.subitems::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
  background-color: rgba(255,255,255,0.1);
}
.subitems:hover::after {
  opacity: 0; 
  transform: scale(0.1, 1);
}


</style>