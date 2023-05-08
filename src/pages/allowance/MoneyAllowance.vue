<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            용돈 조르기
        </div>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mt-20 mb-10 overflow-y-auto">
        <div class="flex justify-between h-1/6 mx-5 my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 20" :key="message">
            <!-- 모금 설명 사진 -->
            <div class="w-2/5 self-center text-6xl text-center">
                <i class="fa-solid fa-circle-user"></i>
            </div>
            <div class="w-3/5 self-center">
                <!-- 가족 이름 -->
                <div class="text-2xl font-bold">
                    가족 이름
                </div>
            </div>
            <button class="w-1/10 self-center pr-3 text-xl">
                <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style></style>