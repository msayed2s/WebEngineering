<template>     
    <div id="in_main">
        <br/><br/><br/>
        <div 
            v-for="sub in subcontent" 
            :key="sub"
            v-html="sub"> 
        </div>
        <br/><br/><br/><br/>
    </div>
</template>


<script>

export default {
    name: "Main",
    props: {
        subcontent: Array,
    },
}

</script>

<style scoped>
#in_main {
    width: 90%;
    text-align: left;

    color: white;
    font-size: 20px;

    border-top: 2px solid red;
    border-bottom: 2px solid red;

}

</style>