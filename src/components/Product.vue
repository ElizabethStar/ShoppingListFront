<template>
        <div>
          <p v-for ="product in products" :key="product.id">
            Название: {{ product.name }}; Количество: {{ product.numberOfPieces }}; Цена: {{ product.price }}; Дата: {{ product.date }}
            </p>
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

</style>
