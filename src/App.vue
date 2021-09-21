<template>
  <div id="app">

    <div id="topGrid">
      <div>
    <img id="logo" alt="Vue logo" src="./assets/emberspring.svg">
      </div>

      <div>
      <section id="topbar" :class="section.id === toggled && 'toggleSectionActive'" v-for="section in sections" :key="section.id" @click="toggleStep(section.id)">
                <h2>{{section.name}}</h2>
      </section>
    </div>
  </div>

    <div id="mainbodyGrid">
      

      <div id="mainbodycol1">
        <div v-if="toggled == 0"><Home/></div>
        <div v-if="toggled == 1"><Services/></div>
        <div v-if="toggled == 2"><About/></div>
        <div v-if="toggled == 3"><Contact/></div>
      </div>

      <div>
        <img src="#" alt="home"/>
        <img src="#" alt="services"/>
        <img src="#" alt="about"/>
        <img src="#" alt="contact"/>
      </div>

      <div id="mainbodycol2">
          <form action="mailto:emberspringdev@google.com" method="GET">
            <input name="subject" type="text" placeholder="who should we contact?" />
            <textarea name="body">your question...</textarea>
            <button type="submit">Ask Away</button>
          </form>
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

#logo{
  width: 5em;
  height: 5em;
  border-radius: 100%;
}
#topGrid{
  display: grid;
  grid-template-columns: 25% 40%;
}

#topbar h2{
  margin: 1em 2em 1em 2em;
}
#topbar h2:hover{
  border-bottom: 2px solid orange;
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
  grid-template-columns: 45% 15% 20%; 
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
  background-color: orange;
color: white;
border: none;
padding: 1em;
border-radius: 10px;
width: 10em;
}
</style>
