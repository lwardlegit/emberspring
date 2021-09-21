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
      <div>
        <p>hi</p>
      </div>

      <div>
        <div v-if="toggled == 0"><Home/></div>
        <div v-if="toggled == 1"><Services/></div>
        <div v-if="toggled == 2"><About/></div>
      </div>

    </div>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'


export default {
  name: 'App',
  components: {
    Home,
    Services,
    About
  },
  data:function(){
    return{
      toggled: 0,
      sections: [
        {id: 0, name: 'Home', desc: 'home'},
        {id: 1, name: 'Services', desc: 'services'},
        {id: 2, name: 'About', desc: 'about'}
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
  grid-template-columns: 15% 30%;
}
#topbar h2{
  margin: 1em 3em 1em 3em;
}
#topbar h2:hover{
  border-bottom: 1px solid orange;
}
.activetab{
  color: blue;
}
#topGrid div{
  display: flex;
}
#mainbodyGrid{
  display: grid;
  grid-template-columns: 15% 30%;
  
}
#mainbodyGrid div{
  margin: 1em;
 
}
</style>
