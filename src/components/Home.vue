<template>
  <div>
    <h4>Emberspring</h4>
    <h5>Creative In-House development</h5>

    <p>Schedule a consultation to learn more about how we can help</p>

    <button id="consultation">Schedule Now</button>

    <b><p>Our Projects</p></b>
    <div>
      <img src="#"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

#consultation{
background-color: orange;
color: white;
border: none;
padding: 1em;
border-radius: 10px;
width: 10em;
}
</style>
