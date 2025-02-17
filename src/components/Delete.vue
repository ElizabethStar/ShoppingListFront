<template>
    <div className="newWindow">
        <h3>Вы точно хотите удалить запись?</h3>
        <p v-if="product!=null">
            Название: {{ product.name }}; Количество: {{ product.numberOfPieces }}; Цена: {{ product.price }}; Дата: {{ product.date }}
        </p>
        <div className="buttons">
            <button @click="deleteProduct()">Удалить</button>
            <button @click="closeDeleteWindow()">Отмена</button>
        </div>
    </div>
    
</template>

<script>

export default {
    props:{
        product: {
            type: Object,
            required: true
        },
        deleteProduct:{
            type: Function,
            required:true
        }
        ,
        closeDeleteWindow:{
            type: Function,
            required:true
        }
        
    }
    
}
</script>

<style >

div.newWindow{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   border: solid, black;
   background-color: aliceblue;
   padding: 30px;
}

</style>

