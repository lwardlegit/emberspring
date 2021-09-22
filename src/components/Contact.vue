<template>
  <div>
    <h3>Contact Us</h3>

    <h4>Consultations</h4>
    <p>Touch base with our development team to discuss your project
        we provide <b>Free</b> consultations for new businesses. 
        <br><b>Consulations include</b><br>

        <ul>
            <li>Technical Requirements and Feasibility</li>
            <li>Pricing</li>
            <li>Timeline</li>
        </ul>
    </p>
    
    <div class="flexed">
    <h4>Join the team</h4> <img class="icon" src="../assets/discord.svg"/>
    </div>
    <p>connect with us on discord to learn more about our process and get involved, stay up to date on new technology as it emerges and share startup tech ideas</p>

    <div id="discord">
        <button>Discord</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.icon{
    height: 50px;
    width: 50px;
}
.flexed{
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
}
#discord{
    
}
#discord button{
background-color: #555fe9d0;
color: white;
border: none;
padding: 1em;
border-radius: 10px;
width: 10em;
}

#discord button:hover{
background-color: #555fe983;
cursor: pointer;
}
</style>
