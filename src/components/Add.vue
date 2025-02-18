<template>
    <div className="newWindow flexColumn">
        <input type="text" placeholder="Введите имя" v-model="name"/>
        <input type="number" placeholder="Введите количество" v-model="count"/>
        <input type="number" placeholder="Введите цену" v-model="price">
        <div >
            <p>Введите Дату:</p>
            <input type="date" v-model="date">
        </div>
        <div>
            <button className="add" @click="addProduct(), closeAddWindow(); clearInput();">Добавить</button>
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
            product: null
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
            this.name = '';
            this.count = null;
            this.price = null;
            this.date = '';
        },
        addProduct(){
            this.product={
                "name": this.name,
                "numberOfPieces": this.count,
                "price": this.price,
                "date": this.date
            };
            ProducrService.addProduct(this.product).then((response) => this.getProducts());
            
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
</style>
