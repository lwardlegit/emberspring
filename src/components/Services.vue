<template>
  <div class="hello">

    <div>
      <h3>Services</h3>

      <div id="contentBody">
      <p>Emberspring offers custom development platforms and scalable services
         to suit the needs of your custom applications</p>
        
      <h5>Web Apps</h5>
      <p>Fully responsive front end applications utilizing the latest in web technology</p>

      <h5>Mobile Applications</h5>
      <p>Put your starup in your pocket with IOS and Android supported apps</p>
      <img src="../assets/iphone.svg" height="50px" width="50px"/>

      <h5>Api Development</h5>
      <p>Original Ideas need data, we design pull, and analyze datasets to perform calculations that help you make business decisions faster than the competition</p>
      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {

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
#contentBody{
  margin-top: 2em;
}
</style>
