<template>
  <div class="hello">

    <div>
      <h3>Services</h3>

      <div id="contentBody">
      <p>Emberspring offers a variety of scalable web and mobile services in addition to hosting and virtualization assistance</p>
      
      <h5>Custom Wireframes</h5>
      <p>Purchase one of our <a href="#">wireframes</a> here for development or ask about custom wireframe designs</p>
      <p>Developing a custom web or mobile app? Premade wireframes options are free with the purchase of a development bundle</p>

      <div class="flexed">
      <h5>Web Apps</h5>
      <img src="../assets/vue.svg" height="50px" width="50px"/>
      <img src="../assets/react.svg" height="50px" width="50px"/>
      <img src="../assets/Angular.svg" height="50px" width="50px"/>
      </div>
        <p>Fully responsive mobile first front end applications utilizing the latest in web technology</p>
      

      <div class="flexed">
      <h5>Mobile Applications</h5>
      <img src="../assets/native.png" height="60px" width="100px"/>
      </div>
        <p>Put your starup in your pocket with IOS and Android supported apps</p>
     
      <div class="flexed">
      <h5>Api Development</h5>
      <img src="../assets/iphone.svg" height="50px" width="50px"/>
      </div>
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
  color: orange;
}
#contentBody{
  margin-top: 2em;
}
.flexed{

  justify-content: left;
  text-align: left;
}
.flexed h5{
justify-content: left;
text-align: left;
}

</style>
