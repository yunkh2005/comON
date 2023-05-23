<template>
    <div>
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-2xl">
                화면명
            </div>
        </div>

        <!-- 하단 버튼 2개 -->
        <div class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-1/5 py-1 ring-1 ring-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="w-4/5 ml-5 py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                버튼1
            </button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>