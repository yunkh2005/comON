<template lang="">
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
    <div class="relative px-5 py-2">
        <input 
            placeholder="검색어를 입력하세요."
            type="text" 
            class="pl-10 rounded-full w-full p-2 bg-gray-100 text-sm focus:ring-1 focus:ring-black focus:bg-white focus:outline-none"
        >
        <i class="fa-solid fa-magnifying-glass absolute left-0 mt-2 ml-8 text-sm text-light"></i>
    </div>

    <!-- 선택 버튼 -->
    <div class="flex px-20 py-2 items-center">
        <div class="mr-4 text-center w-1/2 ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-md">
            선택1
        </div>
        <div class="text-center w-1/2 ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-md">
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