<template>
    <div>
        <a @click="change" class="Footer" >{{this.$attrs.who}}</a>
    </div>
</template>

<script>
// var count = 0;
    export default {
        name: "Footer",

        // props:['who'],
        data() {
            return {
            };
        },
        methods: {
            inc() {
                this.count++;
            },
            change() {
                this.$emit("category", this.$attrs.who);

            }
        },
        created() {
            this.id++;
        }
    }
</script>


<style scoped>

* {
    color: white;
}
/*              Animation                */
/* https://webdeasy.de/top-css-buttons/ */
/* 
.button {

 float: left;
 display: inline-block;
 padding: 14px 40px;
 margin: 4px 2px;
 

  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #FF6347;
  border-radius: 0.7em;
  color: #FF6347;
  cursor: pointer;
  display: flex;
  align-self: center;
 
  font-weight: 400;
  line-height: 1;

  text-decoration: none;
  text-align: center;



  }
  .button:hover, .button:focus, button:active {
    
    color: #fff;
    outline: 0;
       box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
         border-radius: 2em;
  }

button:hover {
    box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
  }

.button {
  border-color: #dddddd;
  color: #555555;
  box-shadow: 0 0 40px 40px #dddddd inset, 0 0 0 0 #dddddd;
  transition: all 300ms ease-in-out;
  
  
} */





</style>