<template>
    <div class="additionalItems">
        <div class="additionalItems__bestSale" v-if="bestSale">ТОП</div>
        <div class="additionalItems__discount" v-if="showDiscount">{{ calcDiscount }}</div>
    </div>
</template>

<script>
export default {
    props:{
        bestSale: Boolean,
        discount: Number,
    },
    computed:{
        showDiscount(){
            return (this.discount > 0) ? true : false;
        },
        calcDiscount(){
            return `-${this.discount}%`
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .additionalItems{
        position: absolute;
        top: 5px;
        left: 5px;
        color: #f48fb1;

        &__bestSale{
            background: #f48fb1;
            color: #f5f5f5;
            border-radius: 3px;
            padding: 0 1px;
        }
    }
</style>