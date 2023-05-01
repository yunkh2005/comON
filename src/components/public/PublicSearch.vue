<template>
    <div class=" px-4 py-2 border-b border-gray-100">
        <!-- 뒤로가기 버튼 -->
        <button class="mr-4">
            <i class="fas fa-arrow-left p-3 rounded-full hover:bg-gray-100"></i>
        </button>
        <span class="font-extrabold text-lg">
            화면명
        </span>
    </div>

    <!-- 검색어 입력 창 -->
    <div class="flex items-center px-5 py-5 cursor-pointer">
        <input 
            placeholder="검색어를 입력하세요."
            type="text"
            class="w-11/12 p-2 bg-gray-100 focus:outline-none rounded-l-full text-sm text-center">
        <button class="w-1/12 p-1 bg-gray-100 hover:bg-gray-300 rounded-r-full text-lg font-semibold text-center">
            <i class="fa-solid fa-magnifying-glass left-0 text-sm text-light"></i>
        </button>
    </div>

    <!-- 선택 버튼 -->
    <div class="flex items-center w-full px-24 cursor-pointer">
        <div class="text-center w-1/2 ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-l-lg">
            선택1
        </div>
        <div class="text-center w-1/2 ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-r-lg">
            선택2
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>