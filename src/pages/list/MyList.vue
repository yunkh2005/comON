<template>
    <!-- 상단 -->
    <div class="bg-mainblue text-white">
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-2xl">
                내 월별 내역
            </div>
        </div>
        <div class="m-3 flex justify-between">
            <!-- 월 이동 버튼 -->
            <div class="flex text-white sm:text-xl md:text-3xl font-bold p-5">
                <span>MM</span>
                <span class="pr-2">월</span>
                <span ><i class="fa-solid fa-chevron-down"></i></span>
            </div>

            <!-- 금액 안내 -->
            <div class="pb-5 col-span-2 flex flex-col text-white pr-3">
                <div class="flex justify-end md:text-2xl font-bold">
                    <span class="pr-1">총 건수:</span>
                    <span class="pr-1">NNN</span>
                    <span>건</span>
                </div>
                <!-- 수입 -->
                <div class="pt-2 flex justify-end font-bold sm:text-sm md:text-xl">
                    <span class="pr-2">수입</span>
                    <span class="pr-1 font-normal">100,000,000,000,000,000</span>
                    <span>원</span>
                </div>
                <!-- 지출 -->
                <div class="flex justify-end font-bold sm:text-sm md:text-xl">
                    <span class="pr-2">지출</span>
                    <span class="pr-1 font-normal">100,000,000,000,000,000</span>
                    <span>원</span>
                </div>
            </div>
        </div>
    </div>


    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-52 mb-10 overflow-y-auto">
        <!-- 일자 -->
        <div class="flex text-2xl font-bold border-b border-black mb-3">
            <span>DD</span>
            <span>일</span>
        </div>

        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 모금 설명 사진 -->
            <div class="w-1/5 self-center pl-3 text-4xl text-center">
                <i class="fa-solid fa-circle-user"></i>
            </div>
            <div class="w-3/5 self-center">
                <!-- 내역 이름 -->
                <div class="grid grid-cols-2 font-bold">
                    <div class="text-2xl lg:text-lg">
                        내역 이름
                    </div>
                    <div class="pl-1 self-center font-bold">
                        <span>
                            PM
                        </span>
                        <span>
                            12:00
                        </span>
                    </div>
                </div>
                <!-- 목표 금액 -->
                <div class="pt-1">
                    <span>
                        100,000,000,000,000,000
                    </span>
                    <span class="text-lg font-bold">
                        원
                    </span>
                </div>
            </div>
            <router-link to="/detailMyList">
                <button class="w-1/10 self-center pr-3 pt-4 text-xl">
                    <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                </button>
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