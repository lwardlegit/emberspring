<template>
  <div id="homeGrid">
    <div id="col1">
      <div id="mainHeader">
        <h3>
         Influential Design  
      </h3>
      <p id="arrow">-></p>
         <h3> Exponential development</h3>
        </div>
      



    </div>
    <div id="col2">
      <div  id="phoneImg">
        <div id="innerPhone">
          <div id="phoneHeaderDiv">
              <p>How</p> 
              <p>About</p>
              <p>This</p>
            </div>

          <div id="phoneContentDiv" class="blocked">
            <img id="mobileTopImg" src="../assets/logofinal.png"/>
            <section>
            <p>A Grand Idea</p>
            <small>Something from a dream</small>
            </section>

            <section>
            <button id="createBtn"><b>Create</b></button>
            </section>

            <small>_______ Or Design _______</small>

            <div>
              <section>
              <small>I need</small>
              <input/>
              </section>

              <section>
              <small>To Make</small>
              <input/>
              </section>

              <section>
              <small>To Improve</small>
              <input/>
              </section>
            </div>

          </div>
        </div>
      
      </div>
      

    </div>
    <div id="col3">
      <h4>Emberspring</h4> <a href="https://www.youtube.com/channel/UCUl7QJjyvm3XA0Nl6lDmloA">Youtube</a>
    <h5>Creative In-House development</h5>

    <p>Schedule a consultation to learn more about how we can help</p>

    <a id="consultation" href="https://www.fiverr.com/share/NE6Dp8">Schedule Now</a>

    <b><p id="wireframesDiv">WireFrames</p></b>
    <div>
      <img class="wireframes" @click="changeSource" src="../assets/wireframe1.png"/>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    changeSource(){
       this.$router.push("/wireframes/1");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainHeader{
  font-size: 6em;
}
.blocked{
  display: block;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#arrow{
  color: rgba(80, 224, 235, 0.856);
}
#homeGrid{
  display: grid;
  grid-template-columns: 50% 25% 10%;
}
#col1{
  background-image: url('../assets/logofinal.png');
}
#col2{
  padding-right: 1em;
}
#phoneImg{
  margin-top: 2em;
  margin-right: 1em;
  border-radius: 10px;
  width: 300px;
  height: 520px;
  background: rgba(128, 128, 128, 0.089);
}
#innerPhone{
  width: 98%;
  height: 98%;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
}
#phoneHeaderDiv{
 background-color: rgba(255, 102, 0, 0.719);
  display: flex;
  justify-content: space-between;
}
#phoneHeaderDiv p{
  color: white;
  margin: 1em;
}
#phoneContentDiv{
  width: 90%;
  margin: 0 auto;
  background: rgba(248, 245, 244, 0.548);
  border-radius: 10px;
}
#createBtn{
  height: 1.5em;
  width: 80%;
  margin: 0 auto;
  background-image: linear-gradient(to right, orange , rgb(255, 81, 0));
  box-shadow: 5px 10px  black;
  color:white;
  border:none;
  border-radius: 3px;
}
#createBtn:hover{
  background-color: #FFDE59;
  box-shadow: 5px 10px  rgba(80, 224, 235, 0.856);
  
}

#phoneContentDiv section{
  width: 90%;
  display: block;
  margin: 1em;
}
#phoneContentDiv section input{
  padding: .4em;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 5px 10px  black;
}

#phoneContentDiv section input:hover{
  box-shadow: 5px 10px  rgba(80, 224, 235, 0.856);
}

#phoneContentDiv section small{
  width: 90%;
  display: block;
}
#mobileTopImg{
  width: 3em;
  height: 3em;
}

.wireframes{
width: 200px;
height: 150px;
border: 1px solid orange;
border-radius: 5px;
}
.wireframes:Hover{
border: 2px solid #70C4F6;
cursor:pointer;

}
#wireframesDiv{
  margin-top: 3em;
}

</style>
