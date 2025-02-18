<template>
    <div>
        <div className="productContainer" v-for ="product in products" :key="product.id">
            <div className="verticalAlignCenter">
                <p>
                Название: {{ product.name }}; Количество: {{ product.numberOfPieces }}; Цена: {{ product.price }}; Дата: {{ product.date }}
                </p>
            </div>
            <button className="delete" @click="OpenDeleteWindow(product)">Удалить</button>
        </div>
        <Delete v-show="deleteVisible" :product="productForDelete" :deleteProduct="DeleteProduct" :closeDeleteWindow="CloseDeleteWindow"/>
    </div>
</template>

<script>
import ProducrService from '../services/ProductService'
import Delete from './Delete.vue'

    export default{
        data(){
            return{
                productForDelete: null,
                deleteVisible: false,
            }
        },
        methods:{
            OpenDeleteWindow(product){
                this.productForDelete=product;
                this.deleteVisible=true;               

            },
            DeleteProduct(){
                ProducrService.deleteProduct(this.productForDelete.id).then((response) => this.getProducts());;
                this.deleteVisible=false;
                this.productForDelete=null;

            },
            CloseDeleteWindow()
            {
                this.deleteVisible=false;
                this.productForDelete=null;
            }
        },
        components:{
            Delete
        },
        props:{
            products:{
                type: Array,
                required: true
            },
            getProducts: {
                type: Function,
                required: true
            }
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




</style>
