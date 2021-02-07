<template>
    <div> 
        <ul>
            <li v-for="info in infos" :key="info.title" @click="change(info)" class="subitems">
                <!-- <a :href="info.href">{{info.title}}</a> -->
                {{info}}
            </li>
        </ul>        
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: {
        infos: Array
    },
    methods: {
        change(payload) {
            // console.log("HIERRR   " + [payload])
            this.$emit("update-main", payload)
        }
    }
}
</script>

<style scoped>


@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.subitems {
        cursor: pointer;
        color: #ddd4db;
        transition-duration: 2s;
        list-style-type:none;
        margin: 10px;
        font-size: 18px;
        font-weight: bold;

        animation: 1s ease-out 0s 1 slideInFromTop;
}

.subitems:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9), 0 6px 20px 0 rgba(0,0,0,0.9);


}

/* .subitems {
    background-color: white;
}

.subitems:link, .subitems:visited {
  background-color: white;
  color: black;
  border: 2px solid rgba(0,128,0,0);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.subitems:hover, .subitems:active {
  background-color: rgba(0,128,0,0);
  color: white;
} */

/* .nachbau {
    width:"50"; height:"60";
} */

</style>