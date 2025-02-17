<script setup>



</script>

<template>
  <div className="main">
    <h1>Список покупок</h1>
    <div className="datePickerContainer">
        <div className="verticalAlignCenter">
          <p>Введите дату:</p>
        </div>
        <input type="date"/>
        <button>Выбрать дату</button>
        <button>Сбросить выбор даты</button>
    </div>
    <div className="productList">
    </div>
  </div>
 
</template>

<style scoped>


h1{
  text-align: center;
}

button{
  width: 100px;
  height: 40px;
  border-radius: 7px;
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



</style>
