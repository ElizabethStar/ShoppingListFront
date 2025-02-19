<template>
    <div className="newWindow flexColumn">
        <input type="text" placeholder="Введите название" v-model="name"/>
        <input type="number" placeholder="Введите количество" v-model="count"/>
        <input type="number" placeholder="Введите цену" v-model="price">
        <div >
            <p>Введите Дату:</p>
            <input type="date" v-model="date">
        </div>
        <p className="error">{{ errorText }}</p>
        <div>
            <button className="add" @click="addProduct();">Добавить</button>
            <button @click="closeAddWindow(); clearInput()">Отмена</button>
        </div>

    </div>
</template>

<script>

import ProducrService from '../services/ProductService'

export default{
    data(){
        return{
            name: '',
            count: null,
            price: null,
            date: '',
            product: null,
            errorText:''
        }
    },
    props:{
        closeAddWindow: {
            type: Function,
            required: true
        },
        getProducts: {
            type: Function,
            required: true
        }
    },
    methods:{
        clearInput(){
            this.errorText='';
            this.name = '';
            this.count = null;
            this.price = null;
            this.date = '';
        },
        addProduct(){
            if (this.name==''){
                this.errorText='Введите название';
            }
            else if (this.count==null){
                this.errorText='Введите количество';
            }
            else if (!Number.isInteger(this.count)){
                this.errorText='Количество должно быть целым числом';
            }
            else if (this.count<=0){
                this.errorText='Количество должно быть больше 0';
            }
            else if (this.price==null){
                this.errorText='Введите цену';
            }
            else if (this.price<0){
                this.errorText='Цена не может быть отрицательной';
            }
            else if (this.date==''){
                this.errorText='Введите дату';
            }
            else{
                this.errorText='';
                this.product={
                    "name": this.name,
                    "numberOfPieces": this.count,
                    "price": this.price,
                    "date": this.date
                };
                ProducrService.addProduct(this.product).then((response) => this.getProducts());
                this.closeAddWindow();
                this.clearInput();
            }
            
        }
    }
}

</script>

<style scoped>

div.flexColumn{
    display: flex;
    flex-direction: column;
}

div.flexColumn > *{
    margin: 20px;
}

p{
    font-size:medium;
    font-weight:normal;
    margin-bottom: 10px;
}

button{
    margin: 0 5px;
}

.error{
    color:red;
    margin-top: 7px;
}
</style>
