<template>     <div class="in_main">

        <div 
        v-for="sub in subcontent" 
        :key="sub"
        v-html="sub">{{msg}}</div>

        <!-- <div v-for="data in content" :key="data">
            <div v-for="i in data" :key="i">
                {{i.content}}
            </div>
        </div> -->
        <!-- <iframe :src="this.$attrs.whoo"></iframe> -->
        <!-- <iframe style="width:100%;height:100%;" frameborder="0" :src="this.$attrs.whoo"></iframe>; -->
    </div>
</template>

<script>

// import content from "../Classname.json"


export default {
    name: "Main",
    
    props: {
        subcontent: Array,

    },



    data() {
        return {
            // btnName :[],
            msg: '<script>' + this.$attrs.whoo + '</scrip' + "t>",

        };
    },

    // methods:{
        // passHeadings(){
        //     this.$emit("btnNames", this.btnName);
        // }
    // },
    // created(){
    //     for (const heading in this.content){
    //         this.btnName.push(heading);
    //     }
    //     this.passHeadings();
    // }
    
}
</script>

<style scoped>
.in_main {
    width: 90%;
    text-align: left;
    /* background-color: #55555; */
    color: white;
    font-size: 20px;
    
}






</style>