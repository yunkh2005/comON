<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            화면명
        </div>
    </div>

    <!-- 검색어 입력 창 -->
    <div class="flex items-center px-5 pb-5 cursor-pointer w-full">
        <input 
            placeholder="검색어를 입력하세요."
            type="text"
            class="w-full p-2 bg-gray-200 focus:outline-none rounded-full text-center">
            <i class="fa-solid fa-magnifying-glass absolute right-10"></i>
    </div>

    <!-- 선택 버튼 -->
    <div class="flex items-center w-full px-24 cursor-pointer">
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-l-full">
            선택1
        </button>
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            선택2
        </button>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>