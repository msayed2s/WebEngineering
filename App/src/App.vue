<template>
  <div id="app">
    <div class="grid-container">
          <div class="header" >
            <Button  
            v-for="name in btnNames" 
            :key="name"
            :who="name"
            @category="load($event)">>
            </Button>
              <!-- <Button @category="load($event)" who="Index"></Button>
              <Button @category="load($event)" who="Theorie"></Button> -->
              <!-- {{Button.count}} -->
              <!-- <Button @category="load($event)" who="Übungen"></Button>
              <Button @category="load($event)" who="Quellen"></Button> -->
              <!-- <Button @category="load($event)" who="Einstellungen (?)"></Button> -->
          </div>

          
          <div class="menu">
            <!-- https://www.smashingmagazine.com/2020/01/data-components-vue-js/ -->
            <Menu @update-main="updateMain($event)" :infos="info[0]" whoo="test" > </Menu>
          </div>

          <div class="main">
            <!-- <Main whoo="./Uebung2/zweiPunktEins.html"></Main> -->
            <Main :subcontent="subcontent"></Main>
             <!-- <Main whoo="C:\Users\moesa\Documents\WebEngineering\Uebung2\zweiPunktEins.html">was</Main> -->
          </div>

          <!-- <div class="menu"> -->

 

            <!-- <test 
              v-for="exercise in exercises" 
              v-bind:key="exercise.id"
              v-bind:title="exercise.title"
              ></test> -->

          <!-- </div>
          <div id="main" class="main"><test title="Main"/></div>  
          <div class="item4">Right</div> -->
         <!-- <div class="item5">Footer</div> -->
    </div>
  </div>
</template>

<script >
// import HelloWorld from './components/HelloWorld.vue'
// import test from "./components/test.vue"
import Button from "./components/Button.vue"
import Menu from "./components/Menu.vue"
import Main from "./components/Main.vue"
import content from "./components/Aufbau.json"



export default {
  name: 'App',
  components: {
    // HelloWorld
    // test,
    Button,
    Menu,
    Main,
    
  },
  data() {
    return {
      lastSeen: "",
      subcontent: ["<h1>Willkommen auf meiner Seite!</h1>"],
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
        // console.log("HEAD " + heading)
            var tmp = []
        this.btnNames.push(heading);
                   //this.liNames.push(content[heading]);
        // this.liNames.push(content[heading]);
        // console.log(content[heading])
        for(const x in values){
            tmp.push(x)
          // console.log("VALUES: " + x)
          
          // this.liNames.push(this.btnNames[heading] : x)
        }
        this.liNames.push(tmp);
        
        // console.log("HI " + this.liNames[0][0])


        // console.log("DOMA " + this.content[heading])
      }
      // console.log("ALLES " + this.liNames)

      
      
      // const test1 = test["headings"]
    


      // console.log(this.liNames["html"])
     

      // for(const names of this.btnNames) {
      //   // console.log("NAMES " + names)
      //   this.liNames.push({"title":this.btnNames[names]})
      // }
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
      // setTimeout(() => this.clear(), 500);
      // this.info = [];
      this.clear();
      await this.sleep(200);

      this.lastSeen = payload;
      // this.lastSeen.push(payload);

       for(let i = 0; i < this.btnNames.length; i++) {
      //   //console.log("NAMEEE   " + this.btnNames[i] + "   " + payload)
         if(payload == this.btnNames[i]) {
           console.log(this.content[this.btnNames[i]][this.liNames[i]] )
           this.info.push(this.liNames[i])

    
          // console.log("HII")
          // for(let j = 0; j < this.liNames.length; i++) {
            // this.info.push({"title" : this.liNames[i]})
      //       //console.log("WAS GEHT " + this.liNames[i])
          // }
           return;
         }
       }

      // if(payload == this.btnNames[0]){
      //   this.info=[];
      //   this.info.push({'title':this.liNames[0][0],'href':'https://www.google.de'});
      //   this.info.push({'title':"you",'href':'www.google.de'});
      //   this.info.push({'title':"kalb",'href':'www.google.de'});
      //   this.info.push({'title':"a7a",'href':'www.google.de'});
      //         console.log("Fuck you", content[this.btnNames[0]]);
      // }
      // else if(payload == 'Theorie'){
      //   this.liNames=[];
      //   this.liNames.push(10);
      //   this.liNames.push(11);
      //   this.liNames.push(12);
      //   this.liNames.push(13);
      // }
      // this.user.username = username;
      },
        
  
    


      updateMain(payload) {
        // this.lastSeen.push(payload)
        // console.log("VOHER : : : :      " + this.lastSeen[0] + " " + payload)
        // console.log("WAS GEHT     " + content[this.lastSeen[0]][this.lastSeen[1]].content)
        this.subcontent = ""
        this.subcontent = content[this.lastSeen][payload].content;


      //   this.test = this.subcontent[1].split("<script>")[1]
      //   var was = this.subcontent[1].split("<script>")[0] + "</body></html>"
      //   this.test = this.test.split("</scrip")[0]
      //   console.log(was)

      // this.subcontent = [was];
        

        switch(payload) {
          case("Google"): 
            // console.log("chillen");
            // fetch(".")
            // .then(x => x.text())
            // .then(x => console.log(x));
            

           
            break;
        }
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


