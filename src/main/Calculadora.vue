<template>
  <div class="calculadora">
    <h1>calculadora</h1>
    <Display  :value="displayValue"/>
    <Button label="AC" triple @BtnClick ="limparMemoria"/>
    <Button label="/" operation @BtnClick="alterarOperacao" />
    <Button label="7" @BtnClick="addNumero"/>
    <Button label="8" @BtnClick="addNumero"/>
    <Button label="9" @BtnClick="addNumero"/>
    <Button label="*" operation @BtnClick="alterarOperacao" />
    <Button label="4" @BtnClick="addNumero"/>
    <Button label="5" @BtnClick="addNumero"/>
    <Button label="6" @BtnClick="addNumero"/>
    <Button label="-" operation @BtnClick="alterarOperacao"/>
    <Button label="1" @BtnClick="addNumero"/>
    <Button label="2" @BtnClick="addNumero"/>
    <Button label="3" @BtnClick="addNumero"/>
    <Button label="+" operation @BtnClick="alterarOperacao"/>
    <Button label="0" double @BtnClick="addNumero"/>
    <Button label="." @BtnClick="addNumero"/>
    <Button label="=" operation @BtnClick="alterarOperacao"/>
    
  </div>
</template>

<script>
import Display from "../components/Display.vue";
import Button from "../components/Button.vue";

export default {
  data: function(){
    return{
      displayValue: "0",
      clearDisplay:false,
      values:[0,0],
      current : 0
    }
  } ,
  components: { Button, Display },

  methods: {

    limparMemoria(){
      Object.assign(this.$data,this.$options.data())
    },

    alterarOperacao(operacao){

      if(this.current === 0){
        this.operacao = operacao;
        this.current = 1;
        this.clearDisplay = true;

      }else {
          const equals = operacao === "="
          const currentOperacao = this.operacao

          try {
            this.values[0] = eval(
              `${this.values[0]} ${currentOperacao}${this.values[1]}`
            )
          }catch(e){
                 this.$emit('onError',e);
          }

          this.values[1]= 0;
          this.displayValue =this.values[0];
          this.operacao = equals ? null :operacao;
          this.current = equals ? 0 : 1;
          this.clearDisplay = !equals;
      }
    
    },
    addNumero(numero){

      if(numero === "." && this.displayValue.includes(".")){
        return 
      } 
      const clearDisplay = this.displayValue ==="0" ||
      this.clearDisplay   
      const currentValue = clearDisplay ? "":this.displayValue
      const displayValor = currentValue + numero;

      this.displayValue = displayValor;
      this.clearDisplay =false;
      this.values[this.current] = displayValor;
       
       //if(numero !== "."){
       //  const index = this.current;
       //  const novoValor = parseFloat(displayValor);
       //  this.values[index] = novoValor;
       //}
      
  }
  }
}
</script>

<style>
.calculadora {
 
  height:360px;
  width: 235px;
  border-radius: 5px;
  overflow:hidden;

  display: grid;
  grid-template-columns: repeat(4,25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>