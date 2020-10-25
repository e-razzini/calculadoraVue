<template>
  <div id="app">

   <Calculadora/>

  </div>
</template>

<script>

import Calculadora from './main/Calculadora.vue'

export default {  
  components: {Calculadora}
}
</script>

<style>
body{
  margin:0;
  font-family: 'Syne Mono', monospace;
}
#app{

display: flex;
flex-direction:column;
height:100vh;
justify-content:center;
align-items:center;
text-align:center;

color :#fff;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(13,40,4,1) 30%, rgba(0,212,255,1) 100%);

}
</style>
