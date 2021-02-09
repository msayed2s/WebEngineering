<template>
    <div>
        <div v-html="compiledHtml"></div>
    </div>
</template>

<script>
import axios from 'axios'
// import Vue from "Vue"
export default {
    name: "htmlTemplate",

    data() {
        return {
            fileName: "zweiPunkteins.html",
            input: ""
        };
    },

    created() {
        // this.fileName = this.$route.params.fileName;
        this.testt()
    },
    computed: {
        compiledHtml: function() {
            return this.input;
        }
    },
    
    methods: {


        testt() {
            var wasgeht = axios.get("../../components/zweiPunktEins.html")
            
            console.log(wasgeht)
        },

        loadFile() {
            axios({
                method: "get",
                url: "./src/component/Uebung2/" + this.fileName
            }).then(result => {
                this.input = result.data;
            })
            .catch(error => {
                console.log("miese passiert" + error)
            })
        }
    }
}


</script>
