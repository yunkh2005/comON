<template>
    <div>
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-xl">
                화면 이름
            </div>
        </div>

        <!-- 하단 버튼 1개 -->
        <div class="absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-full py-1 ring-1 ring-gray-100 bg-gray-100 hover:bg-gray-300 text-lg font-semibold rounded-lg">
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