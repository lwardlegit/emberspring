<template>
  <div id="maincontainer">
    <div id="currentWireframe"> 
        <h4>{{this.title}}</h4>
        <p>{{this.description}}</p>
        <img id="currentImg" :src="require(`../assets/${this.currentImg}.png`)" />

     
        <div id="imgSetContainer"> 
          <p class="directions"> Prev </p>
          <div v-for="img in images" :key="img.id">
            <img class="thumbnail" :src="getFrame(img.src)" @click="changeCurrent(img.src)" v-bind:class="{ isCurrentImg: current }" alt="design"/>
             </div>
          <p class="directions"> Next </p>
        </div>
      </div>


    <div id="otherWireframes"> 
      <div v-for="frame in frames" :key="frame.id">
            <img class="otherFrames" :src="getFrame(frame.src)" alt="frames"/>
             </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data:function(){
    return{
    title: 'Omnia Fire Opal',
    description: 'this wireframe features sharp cutting edge modern features with gradual curvature and subtle edges, strong visuals and an emphasis on sharp styling this design works well with simple backgrounds and busy assets',
    currentImg: 'frame3',
    wireframes: [],
    images:[
      {id: 0, src:'frame1', current:false},
      {id: 1, src:'frame2', current:false},
      {id: 2, src:'frame3', current:true},
      {id: 3, src:'frame4', current:false},
      {id: 4, src:'frame5', current:false},
      {id: 5, src:'frame6', current:false},
    ],
    frames:[
      {id: 0, src:'frame1', current:false},
      {id: 1, src:'frame2', current:false},
      {id: 2, src:'frame3', current:true},
      {id: 3, src:'frame4', current:false},
      {id: 4, src:'frame5', current:false},
      {id: 5, src:'frame6', current:false},
    ]
    }
  },
  methods:{
    getFrame(img){
         return require('../assets/'+img+'.png');
    },
    getCurrentFrame(img){
         return require('../assets/'+img+'.png');
    },
    changeCurrent(img){
        this.currentImg = img
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#maincontainer{
  margin-top: 2em;
  display: grid;
  grid-template-columns: 60% 30%;
}

#currentWireframe h4{
margin-left: 2em;
padding-bottom: .5em;
width: 25%;
border-bottom: 1px solid orange;
}
#currentWireframe p{
  padding-left: 2em;
  width: 80%;
}

#currentImg{
  padding-left: 2em;
  padding-top: 2em;
  height: 23em;
  width: 90%;
}
#imgSetContainer{
  display: flex;
  margin-top: 5em;

}
#imgSetContainer div{
  padding: 1em;
}
#imgSetContainer img{
  height: 50px;
  width: 60px;
}
.isCurrentImg{
  border: 1px solid black;
}
.directions{
  padding: 1em;
  background: rgb(255, 153, 0);
  color:white;
  width: 5em;
  padding-top: 1em;
}
.directions:hover{
  padding: 1em;
  background: rgb(255, 81, 0);
 
}
.thumbnail{
  border: solid 1px black;
}
.thumbnail:hover{
  box-shadow: 5px 2px 2px  orange;

}
#otherWireframes{
  justify-content: right;
  display: block;
  margin-left: 7em;
}
#otherWireframes div{
  justify-content:left;
  overflow-x: auto;
}

.otherFrames{
  margin-left: 2em;

  height: 70px;
  width: 230px;
  margin-top: 1em;
  margin-bottom: 1em;
}
.otherFrames:hover{
  border: 1px solid black;
  cursor:pointer;
}
</style>
