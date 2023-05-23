<template>
    <EmptyMonthly v-if="isEmpty"></EmptyMonthly>
    <MonthlyMain v-else></MonthlyMain>
</template>

<script>
import EmptyMonthly from './EmptyMonthly.vue'
import MonthlyMain from './MonthlyMain.vue'

export default {
    components: {
        EmptyMonthly,
        MonthlyMain
    },
    data() {
        return{
            isEmpty: true, // 내역이 비었는지 
        }
    }
}
</script>

<style></style>