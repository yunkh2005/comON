<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <router-link to="/listmain" class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></router-link>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
             월별 유형 분석
        </div>
    </div>

    <div class="over-y-auto">
        <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
            <router-link to="/analysisOfIncome" class="text-center w-1/2 h-9 bg-gray-100 text-2xl  hover:bg-skyblue hover:text-white font-semibold rounded-l-full">
                수입
            </router-link>
            <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-r-full">
                지출
            </button>
        </div>
    </div>
    <div class="bg-gray-100 m-2">
        <!-- 월 이동 버튼 -->
        <div class="flex bg-white w-full pb-8">
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
        <!-- 수입 유형 -->
        <div class="w-full mt-3 text-lg sm:text-base">
            <!-- 그래프 -->
            <div class="flex justify-center h-52 mx-5 bg-mainblue text-white">
                <i class="fa-solid fa-chart-pie text-9xl mt-8"></i>
            </div>
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
            <router-link to="/allTypeOfOutcome">
                <div class="absolute inset-x-0 bottom-0  px-6 py-3">
                    <div class="w-full text-center py-1 ring-1 ring-gray-100 bg-mainyellow hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                        전체 유형 보기
                    </div>
                </div>
            </router-link>
        </div> 
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>