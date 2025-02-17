<script>


import Product from './components/Product.vue'
import AddWindow from './components/Add.vue'
import axios from 'axios'

  export default{
    data(){
      return {
        
        selectedDate:'',
        products: [],
        addFlag: false
      }
    },
    methods:{

      deleteDate(){
        this.selectedDate='';
      },
      openAddWindow(){
        this.addFlag = true;
      },
      closeAddWindow(){
        this.addFlag=false;
      },
      addProduct(){
        this.addFlag=false;
      }
    },
    components:{
      Product,
      AddWindow
    }
  }
</script>

<template>
  <div className="main">
    <h1>Список покупок</h1>
    <div className="flexSpaceBetween">
      <div className="datePickerContainer">
          <div className="verticalAlignCenter">
            <p>Введите дату:</p>
          </div>
          <input type="date" v-model="selectedDate" />
          <button @click="deleteDate()">Сбросить выбор даты</button>
      </div>
      <button @click="openAddWindow()">Добавить новую запись</button>
      <AddWindow v-show="addFlag" :closeAddWindow="closeAddWindow" :addProduct="addProduct"/>
    </div>
    <div className="productList">
      <p v-if="selectedDate!=''">Выбранная дата: {{ selectedDate }}</p>  
      <p v-else>Дата не выбрана</p>  
      <Product/> 
    </div>
  </div>
 
</template>


<style scoped>


h1{
  text-align: center;
}


div.flexSpaceBetween{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}


.datePickerContainer > div,
.datePickerContainer > button,
.datePickerContainer > input
{
  margin-right: 20px;
}

.datePickerContainer{
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

.productList{
  margin-top: 20px;
}


</style>
