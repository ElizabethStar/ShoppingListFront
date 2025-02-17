<script>


import Product from './components/Product.vue'
import axios from 'axios'

  export default{
    data(){
      return {
        selectedDate:'',
        products: []
      }
    },
    methods:{

      deleteDate(){
        this.selectedDate='';
      }
    },
    components:{
      Product
    }
  }
</script>

<template>
  <div className="main">
    <h1>Список покупок</h1>
    <div className="datePickerContainer">
        <div className="verticalAlignCenter">
          <p>Введите дату:</p>
        </div>
        <input type="date" v-model="selectedDate" />
        <button @click="deleteDate()">Сбросить выбор даты</button>
    </div>
    <div className="productList">
      <p v-if="selectedDate!=''">Выбранная дата: {{ selectedDate }}</p>  
      <p v-else>Дата не выбрана</p>  
      <Product/>
    </div>
  </div>
 
</template>


<style>


h1{
  text-align: center;
}

button {
  border-radius: 7px;
  padding: 10px;
}


.datePickerContainer > div,
.datePickerContainer > button,
.datePickerContainer > input
{
  margin-right: 20px;
}

.datePickerContainer{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  max-width: 2000px;
  justify-content: start;
  align-content:flex-start;
}

.verticalAlignCenter{
  height: auto;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}

p{
  font-size: large;
  font-weight:bold;
}

.productList{
  margin-top: 20px;
}


</style>
