<template>
        <!-- 상단 -->
        <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button
            class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full">
        </button>
        <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-2xl">
                월별 사진
            </div>
        </div>
    
    <!-- 월 이동 버튼 -->
    <div class="flex absolute bg-white w-full mt-30 py-1">
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
            <div class="w-10 h-10 hover:opacity-50 cursor-pointer">
                <i class="fa-solid fa-image"></i>
            </div>
        </div>
        <div class="flex-col place-self-center text-2xl font-bold">
            <div class="w-10 h-10 hover:opacity-50 cursor-pointer">
                <i class="fa-solid fa-image"></i>
            </div>
        </div>
        
    </div>
    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';

export default {
    components: { 
		ButtomTab,
	}
}
</script>
<style lang="">
    
</style>