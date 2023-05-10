<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            받은 메세지
        </div>
    </div>

    <!-- 상단 우측 버튼 -->
    <div class="fixed top-0 right-0 p-3">
        <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <!-- 조르기 사진 모아보긴 -->
            <i class="px-2 py-1 fa-solid fa-image font-bold text-2xl"></i>
        </button>
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

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 5" :key="message">
            <!-- 보낸사람 사진 -->
            <div class="w-1/5 self-center pl-3 text-4xl text-center">
                <i class="fa-solid fa-user"></i>
            </div>
             <!-- 보낸사람 이름 -->
            <div class="grid grid-cols-2 font-bold">
                    <div class="text-2xl">
                        이름
                    </div>
            </div>
            <div class="w-3/5 self-center">
                <!-- 받은 메세지 -->
                <span class="text-xs">
                    받은 메세지
                </span>
            </div>
                
             <!-- 받은 사진 -->
            <button class="w-1/10 self-center pr-3 text-xl">
                <i class="fa-solid fa-image text-5xl"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style></style>