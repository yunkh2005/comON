<template>
    <div>
        <!-- 상단 화면 -->
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-xl">
                월별 예산 계획
            </div>
        </div>

        <!-- 금액 -->
        <div class="pr-2 pb-3 border-b border-gray-100 text-end font-bold text-2xl">
                <span>100,000,000,000,000,000</span>
                <span>원</span>
        </div>

        <!-- 중앙 내용 -->
        <div class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto bg-gray-100">
            <div v-for="message in 100" :key="message">유형</div>
        </div>
    </div>
    <div class="flex absolute inset-x-0 bottom-0 px-6 py-3">
        <button @click="showCategoryAdd = true"  class="w-1/5 py-1 ring-1 ring-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
            <i class="fa-solid fa-plus"></i>
        </button>
        <button class="w-1/5 py-1 ml-5 ring-1 ring-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="w-3/5 ml-5 py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
            저장
        </button>
    </div>
    <!-- 팝업 -->
    <CategoryAdd v-if="showCategoryAdd" @close-modal="showCategoryAdd = false"></CategoryAdd>
</template>
<script>
import CategoryAdd from './CategoryAdd.vue'

export default {
    components:{
        CategoryAdd
    },
    data() {
        return{
            showCategoryAdd: false,
        }
    }    
}
</script>
<style>
    
</style>