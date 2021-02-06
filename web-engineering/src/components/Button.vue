<template>
    <button class="button">{{ this.$attrs.who }}</button>
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

    float: left;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    display: inline-block;
    padding: 14px 40px;
    border-radius: 12px;
}

.button:hover {
    /* background-color: #555555; */
    background-color: black;
    color: white;
    padding: 14px 40px;
    border-radius: 12px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>