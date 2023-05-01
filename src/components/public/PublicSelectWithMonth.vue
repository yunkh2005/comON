<template>
    <!-- 선택 버튼 -->
    <div class="flex absolute left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-8 ring-1 ring-gray-300 hover:bg-gray-300 text-xl font-semibold rounded-l-lg">
            선택1
        </button>
        <button class="text-center w-1/2 h-8 ring-1 ring-gray-300 hover:bg-gray-300 text-xl font-semibold rounded-r-lg">
            선택2
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
</template>
<script>
export default {

}
</script>
<style></style>