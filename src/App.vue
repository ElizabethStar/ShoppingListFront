<script>


import Product from './components/Product.vue'
import AddWindow from './components/Add.vue'
import ProducrService from './services/ProductService'

  export default{
    data(){
      return {
        
        selectedDate: "",
        products: [],
        addFlag: false,
        totalsum: 0


      }
    },
    methods:{

      deleteDate(){
        this.selectedDate="";
      },
      openAddWindow(){
        this.addFlag = true;
      },
      closeAddWindow(){       
        this.addFlag=false;
      },
      getProducts(){
        ProducrService.getProducts(this.selectedDate).then((response) => {this.totalsum=response.data.total; this.products=response.data.productList});
      }
    },
    components:{
      Product,
      AddWindow
    },
    created(){
      this.getProducts();

    }
  }
</script>

<template>
  <div>
    <h1>Список продуктов</h1>
    <div className="flexSpaceBetween">
      <div className="datePickerContainer">
          <div className="verticalAlignCenter">
            <p>Введите дату:</p>
          </div>
          <input type="date" v-model="selectedDate" @input="getProducts()"/>
          <button @click="deleteDate(); getProducts()" >Сбросить выбор даты</button>
      </div>
      <button className="add" @click="openAddWindow()">Добавить новую запись</button>
      <AddWindow v-show="addFlag" :closeAddWindow="closeAddWindow" :getProducts="getProducts"/>
    </div>
    <div className="productList">
      <p v-if="selectedDate!=''">Выбранная дата: {{ selectedDate }}</p>  
      <p v-else>Дата не выбрана</p>  
      <Product :products="products" :getProducts="getProducts"/> 
    </div>
    <div className="horizontalAlignCenter">
      <p v-if="products.length!=0">Итоговая сумма: {{ totalsum }}</p>
      <p v-else>Нет продуктов в списке</p>
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
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}

.horizontalAlignCenter{
  display: flex;
  justify-content: center;
}

.productList{
  margin-top: 20px;
  margin-bottom: 20px;
}

div.center{
  align-content: center;
}

</style>
