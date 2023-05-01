<template lang="">
    <!-- 검색 버튼 -->
    <!-- 아직 해결 못함 앞으로 안나옴 -->
    <div class="flex sticky top-0 right-0">
        <button class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="p-3 hover:bg-gray-200 fa-solid fa-magnifying-glass text-2xl rounded-full "></i>
        </button>
    </div>
    
    <!-- 월별, 특별 선택 버튼 -->
    <div class="flex absolute left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-8 ring-1 ring-gray-300 hover:bg-gray-300 text-xl font-semibold rounded-l-lg">
            월별
        </button>
        <button class="text-center w-1/2 h-8 ring-1 ring-gray-300 bg-gray-300 text-xl font-semibold rounded-r-lg">
            특별
        </button>
    </div>
    <!-- 월 이동 버튼 -->
    <div class="flex absolute bg-white w-full mt-16 py-1">
        <!-- 이전 월 이동 버튼 -->
        <button class="w-1/3">
            <i class="fa-solid fa-chevron-left px-2 text-xl hover:bg-gray-300 rounded-full"></i>
        </button>
        <!-- 월 안내 -->
        <button class="w-1/3 font-extrabold text-2xl text-center hover:bg-gray-300 rounded-full">
            mm월
        </button>
        <!-- 이후 월 이동 버튼 -->
        <button class="w-1/3 ">
            <i class="fa-solid fa-chevron-right px-2 text-xl hover:bg-gray-300 rounded-full"></i>
        </button>
    </div>
    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-32 mb-20 overflow-y-auto bg-gray-100 text-center">
        <!-- 안내 문구 -->
        <div class="flex-col place-self-center text-2xl font-bold">
            <i class="p-4 fa-regular fa-star text-5xl"></i>
            <div>
                계획된 특별 예산이
            </div>
            <div>
                없습니다.
            </div>
        </div>
        <!-- 계획 하러가기 버튼 -->
        <button class="w-1/2 p-2 m-3 bg-gray-200 hover:bg-gray-300 rounded-full">
            <div class="ml-2 font-bold text-center">
                계획하러가기
                <i class="fa-solid fa-chevron-right pl-1 text-xl hover:bg-gray-300 rounded-full"></i>
            </div>
        </button>
    </div>
    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';
import TopButton from '../../components/public/TopButton.vue';

export default {
    components: {
        ButtomTab,
        TopButton,
    }
}
</script>
<style lang="">
    
</style>