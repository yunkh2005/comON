<template>
    <div>
        <!-- 상단 화면 -->
        <div class="bg-mainblue text-white">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                <!-- 화면명 -->
                <div class="flex-col pl-4 font-bold text-xl">
                    월별 예산 계획
                </div>
            </div>
            <!-- 금액 -->
            <div class="pr-2 py-8 border-b border-gray-100 text-end font-bold text-2xl">
                    <span>100,000,000,000,000,000</span>
                    <span>원</span>
            </div>
        </div>

        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 3" :key="message">
            <!-- 모금 설명 사진 -->
            <div class="w-2/5 self-center pl-3 text-4xl text-center">
                <i class="fa-solid fa-users-viewfinder"></i>
            </div>
            <div class="w-3/5">
                <!-- 내역 이름 -->
                <div class="grid grid-cols-2 font-bold">
                    <div class="text-2xl lg:text-lg">
                        유형
                    </div>
                </div>
                <!-- 목표 금액 -->
                <div class="pt-1 text-end pr-5">
                    <span>
                        100,000,000,000,000,000
                    </span>
                    <span class="text-lg font-bold">
                        원
                    </span>
                    <div class="text-sm">
                        <span>
                            지난달:
                        </span>
                        <span>
                            100,000,000,000,000,000
                        </span>
                        <span class="text-lg font-bold">
                            원
                        </span>
                    </div>
                </div>
            </div>
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