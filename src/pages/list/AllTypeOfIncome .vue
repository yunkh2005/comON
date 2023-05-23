<template>
    <div>
        <!-- 상단 -->
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-2xl">
                유형 전체보기
            </div>
        </div>

        <div class="over-y-auto mt-5">
            <!-- 안내 문구 -->
            <div class="flex ml-5 mb-2 font-bold text-2xl text-mainblue">
                <span>MM</span>
                <span>월 수입</span>
            </div>

            <!-- 그래프 -->
            <div class="flex justify-center h-52 mx-5 bg-mainblue text-white">
                <i class="fa-solid fa-chart-pie text-9xl mt-8"></i>
            </div>

            <!-- 수입 유형 -->
            <div class="w-full mt-3 text-lg sm:text-base">
                <!-- 유형 -->
                <div class="px-5 py-1 grid grid-cols-2 items-center" v-for="message in 10" :key="message">
                    <div class="text-xl sm:text-lg font-bold">
                        유형 이름
                    </div>
                    <div class="justify-self-end">
                        <span class="pr-1">100,000,000,000</span>
                        <span class="font-bold">원</span>
                        <router-link to="/incomeTypeList">
                            <button class="ml-2 px-1 rounded-full hover:bg-skyblue hover:opacity-50">
                            <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </router-link>
                    </div>
                </div>

                <!-- 전체 유형 -->
                <div class="mx-5 my-3 grid grid-cols-3 items-center border-t border-mainblue text-2xl sm:text-xl">
                    <div class="mt-1 font-bold">
                        전체 유형
                    </div>
                    <div class="justify-self-end col-span-2">
                        <span class="pr-1">100,000,000,000</span>
                        <span class="font-bold">원</span>
                    </div>
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