<template>
    <div>
        <div className="productContainer" v-for ="product in products" :key="product.id">
        <div className="verticalAlignCenter">
            <p>
            Название: {{ product.name }}; Количество: {{ product.numberOfPieces }}; Цена: {{ product.price }}; Дата: {{ product.date }}
            </p>
        </div>
            <button className="delete">Удалить</button>
        </div>
    </div>
</template>

<script>
import ProducrService from '../services/ProductService'

    export default{
        data(){
            return{
                products: []
            }
        },
        methods:{
            getProducts(){
                ProducrService.getProducts().then((response) => this.products=response.data);
            }
        },
        created(){
            this.getProducts()

        }
    }
</script>

<style scoped>

div.productContainer{
    display:flex;
    justify-content: space-between;
    background: #bed5eb;
    margin-top: 15px;
    border: 2px, solid, #5e7991;
    padding: 10px;
    border-radius: 10px;
    
}

button.delete{
    background-color: red;
    border: 2px, solid, darkred;
    padding: 7px 15px;

}


</style>
