<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
             월별 유형 분석
        </div>
    </div>

    <div class="over-y-auto">
        <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            수입
        </button>
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            지출
        </button>
        </div>
   
    
    <!-- 월 이동 버튼 -->
    <div class="flex absolute bg-white w-full ">
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

    <div class="flex justify-between my-1 py-9 bg-gray-100 rounded-lg" >
        

        <!-- 수입 유형 -->
        <div class="w-full mt-3 text-lg sm:text-base">
            <!-- 그래프 -->
            <div class="flex h-52 mx-5 bg-mainblue text-white font-bold">그래프</div>
            <!-- 유형 -->
            <div class="px-5 py-1 grid grid-cols-2 items-center" v-for="message in 10" :key="message">
                <div class="text-xl sm:text-lg font-bold">
                    유형 이름
                </div>
                <div class="justify-self-end">
                    <span class="pr-1">100,000,000,000</span>
                    <span class="font-bold">원</span>   
                </div>
            </div>
            <div class="absolute inset-x-0  px-6 py-3">
            <button class="w-full py-1 ring-1 ring-gray-100 bg-mainyellow hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                전체 유형 보기
            </button>
            </div>
        </div>   
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>