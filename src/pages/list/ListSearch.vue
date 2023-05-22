<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            내역  검색
        </div>
    </div>

    <!-- 검색어 입력 창 -->
    <div class="flex items-center px-5 pb-5 cursor-pointer">
        <input 
            placeholder="검색어를 입력하세요."
            type="text"
            class="w-full p-2 bg-gray-200 focus:outline-none rounded-full text-center">
    </div>

    <!-- 검색 내용 -->
    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 사용자 프로필 사진 -->
            <div class="w-1/5 self-center pl-3 text-center">
                <i class="fa-solid fa-circle-user text-4xl"></i>
                <div class="font-bold sm:text-sm">
                    가족 이름
                </div>
            </div>
            <div class="w-3/5 self-center">
                <!-- 내역 이름 -->
                <div class="text-2xl font-bold">
                    내역 이름
                </div>
                <!-- 날짜 -->
                <div class="font-bold">
                    <span>YY년MM월DD일</span>
                    <span class="px-1">|</span>
                    <span>시간 12:00</span>
                </div>
                <!-- 금액 -->
                <div class="text-end">
                    <span>100,000,000,000,000,000</span>
                    <span class="font-bold">원</span>
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
<style lang="">
    
</style>