<template>
  <div id="app">

    <div id="topGrid">
      <div>
        <h3 id="emberspringtext">Emberspring</h3>
        <img id="logo" alt="logo" src="./assets/logofinal.png">
      </div>

      <div>
      <section id="topbar" :class="section.id === toggled && 'toggleSectionActive'" v-for="section in sections" :key="section.id" @click="toggleStep(section.id)">
                <h2>{{section.name}}</h2>
      </section>
    </div>
  </div>

    <div>
      

      <div id="mainbodycol1">
        <div v-if="toggled == 0"><Home/></div>
        <div v-if="toggled == 1"><Services/></div>
        <div v-if="toggled == 2"><Designs/></div>
        <div v-if="toggled == 3"><About/></div>
        <div v-if="toggled == 4"><Contact/></div>
        <div v-if="toggled == 1" id="packages">
          <a class="serviceBtns" href="https://www.fiverr.com/share/qkAGkZ"><b>Develop an App</b></a>
          <a class="serviceBtns" href="https://www.fiverr.com/s2/21689da1ce"><b>Develop an API</b></a>
        </div>
      </div>

      

    </div>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'App',
  components: {
    Home,
    Services,
    About,
    Contact
  },
  data:function(){
    return{
      toggled: 0,
      sections: [
        {id: 0, name: 'Home', desc: 'home'},
        {id: 1, name: 'Services', desc: 'services'},
        {id: 2, name: 'About', desc: 'about'},
        {id: 3, name: 'Contact', desc: 'contact'}
      ],
    }
  },
  methods:{
    toggleStep(id){
      this.toggled = id  
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
#app {
  font-family: 'Space Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: block;
}

#app div{
  justify-content:center;
}

#emberspringtext{
  margin-right: .5em;
  margin-top: .5em;
  font-size: 20px;
  font-style: italic;
}
#logo{
  width: 3em;
  height: 3em;
}
#topGrid{
  display: grid;
  grid-template-columns: 25% 40%;
}

#topbar h2{
  margin: 1em 2em 1em 2em;
}
#topbar h2:hover{
  color:orange;
  cursor: pointer;
}
.toggleSectionActive{
  border-bottom: 2px solid #3CB4FB;
}
.toggleSectionActive h2{
  color: #3CB4FB;
}
#topGrid div{
  display: flex;
}
#mainbodyGrid{
  display: grid;
  grid-template-columns: 40% 25% 20%; 
}
#mainbodycol1{
  border-left: 1px solid orange;
}
#mainbodyGrid div{
  margin: 1em;
 
}
#mainbodycol2{
  display: block;
}
#mainbodycol2 form{
  margin-top: 2em;
}
#mainbodycol2 input{
  display: block;
}
#mainbodycol2 button{
display: block;
background-color: orange;
color: white;
border: none;
padding: 1em;
margin-top: 1em;
border-radius: 10px;
width: 10em;
}
#mainbodycol2 button:hover{
background-color: rgba(255, 166, 0, 0.781);
}
#packages{
  display: flex;
  width: 100%;
}
#packages button{
   margin-right: 3em;

}
.serviceBtns{
  text-decoration: none;
background-color: orange;
color: white;
border: none;
padding: 1em;
border-left: 1px solid white;
width: 10em;
}
.serviceBtns:hover{
background-color: rgba(255, 166, 0, 0.781);
}
#wireframes{
  padding-top: 1em;
}


@media (max-width:500px)  { 
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  #topGrid{
  display: grid;
  grid-template-columns: 90%;
  margin: 0 auto;
}
#mainbodyGrid{
  display: grid;
  grid-template-columns: 90%; 
  margin: 0 auto;
}

#mainbodyGrid div{
  display: block;
  grid-template-columns: 90%;
  margin: 0 auto; 
}

}
@media (max-width:480px)  { /* smartphones, Android phones, landscape iPhone */ 
}
@media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
@media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
</style>
