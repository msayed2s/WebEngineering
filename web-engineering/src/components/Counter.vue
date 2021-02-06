<template>
    <button @click="inc" class="button">{{ count }}</button>
</template>

<script>
    export default {
        name: "Button",
        data() {
            return {
                count: 0,
                
            };
        },
        methods: {
            inc() {
                this.count++;
            }
        }
    }
</script>



<style scoped>

/* https://www.w3schools.com/css/css3_buttons.asp */

.button {

      background-color: white;
    color: black;
    border: 2px solid #555555;    


      transition-duration: 0.4s;
    display: inline-block;
    padding: 14px 40px;
    border-radius: 12px;
}

.button:hover {
    background-color: #555555;
    color: white;
    padding: 14px 40px;
    border-radius: 12px;
}
</style>