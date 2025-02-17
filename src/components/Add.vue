<template>
    <div className="newWindow flexColumn">
        <input type="text" placeholder="Введите имя"/>
        <input type="number" placeholder="Введите количество"/>
        <input type="number" placeholder="Введите цену">
        <div >
            <p>Введите Дату:</p>
            <input type="date">
        </div>
        <div>
            <button @click="addProduct()">Добавить</button>
            <button @click="closeAddWindow()">Отмена</button>
        </div>

    </div>
</template>

<script>
export default{
    props:{
        addProduct:{
            type: Function,
            required: true
        },
        closeAddWindow: {
            type: Function,
            required: true
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
