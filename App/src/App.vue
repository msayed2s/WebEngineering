<template>

  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="grid-container">
          <div class="header" >
            <Button  
            v-for="name in btnNames" 
            :key="name"
            :who="name"
            @category="load($event)">
            </Button>
          </div>

          
          <div class="menu">
            <!-- https://www.smashingmagazine.com/2020/01/data-components-vue-js/ -->
            <Menu @update-main="updateMain($event)" :infos="info[0]" whoo="test1" > </Menu>
          </div>

          <div class="main">
            <!-- <script type="application/javascript" src="./test.js">  </script> -->
            
            <Main :subcontent="subcontent"></Main>
            <!-- <htmlTemplate/> -->
          </div>

          <!-- <div class="footer">
            <Footer :who="['Impressum']"></Footer>
          </div> -->

          
    </div>


  </div>
</template>

<script >
// import test from "./components/test.vue"
import Button from "./components/Button.vue"
import Menu from "./components/Menu.vue"
import Main from "./components/Main.vue"
import content from "./components/Aufbau.json"
// import Footer from "./components/Footer.vue"
// import htmlTemplate from "./components/html-template.vue"



export default {
  name: 'App',
  components: {

    // test,
    Button,
    Menu,
    Main,
    // Footer
    // htmlTemplate
    
    
  },
  data() {
    return {
      lastSeen: "",
      subcontent: ["<h1 style='text-align:center'>Willkommen zu meinem Semester - Projekt!</h1>",
                    "<p style='text-align:left;'>Für die umsetzung der Web-App habe ich Vue Single-File-Components verwendet.",
                    "Vue ist State of the Art und ein sehr mächtiges Framework mit denen man fast alle im Semster gelernten Methoden anwenden kann.",
                    "Ich habe das Projekt mit Single-File-Components aufgebaut. Dies hat es mir erlaubt, die Website sehr dynamisch aufzubauen.",
                    "Jedes der Components hat seinen eigenen HTML, CSS und JavaScript Code bereits implementiert. So weiß man genau, wo man was äändern muss um den gewünschten Effekt zu erzielen",
                    "Der Aufbau erfolgt in einer einzigen .json Datei. Damit habe ich so weit wie möglich versucht, alle Componenten strikt voneinander zu trennen.",
                    "So kann man mit dem Austausch einer einzigen Datei, den Inhalt sofort austauschen. Der Haupt-Style der Seite liegt in einer externen .css, sodass man auch hier mit wenig Aufwand eine neue Gestalltung erzielen kann",
                    "<br/><br/>",
                    "<b>Viel Spaß beim Erkunden!</b>",


                    "</p>"
                    ],
                    
      liNames:[],
      info:[],
      btnNames:[],
      main: [],
      content:content,
      test: ""
     
    }
  },
  created(){

      for (const [heading, values] of Object.entries(this.content)){

        var tmp = []
        this.btnNames.push(heading);
        for(const x in values){
            tmp.push(x)
        }
        this.liNames.push(tmp);
      }
  },
  methods: {
    assignBtnNames(payload){
      this.btnNames = payload;
    },
    clear() {
      this.info = []
    },


    // https://www.sitepoint.com/delay-sleep-pause-wait/
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },


    
    async load(payload) {
      this.clear();
      await this.sleep(200);

      this.lastSeen = payload;


       for(let i = 0; i < this.btnNames.length; i++) {

         if(payload == this.btnNames[i]) {
           console.log(this.content[this.btnNames[i]][this.liNames[i]] )
           this.info.push(this.liNames[i])
           return;
         }
       }

      },
        
  
    


      updateMain(payload) {
        this.subcontent = ""
        this.subcontent = content[this.lastSeen][payload].content;
        
      }
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


