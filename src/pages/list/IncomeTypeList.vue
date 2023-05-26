<template>
    <div class="flex flex-col bg-mainblue text-white">
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
            <div class="pl-4 font-bold text-2xl">
                수입 유형 1 내역
            </div>
        </div>
        <!-- 요약 -->
        <div class="my-5 mx-3">
            <div class="flex justify-end">
                <div >총 건수:</div>
                <div class="font-bold mx-2">NN</div>
                <span>건</span>
            </div>
            <div class="text-right">
                총 100,000,000,000,000원
            </div>
        </div>
    </div>
    <!-- 일별 내역 -->
    <div class="mx-3 mt-3">
        <div class="text-xl font-bold text-mainblue mb-2">DD일</div>
        <div class="border-y-2 border-mainblue"></div>
        <div class="flex my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <div class="w-1/5 self-center py-3 text-center">
                <i class="fa-solid fa-circle-user text-4xl"></i>
            </div>
            <div class="w-4/5 self-center">
                <div class="text-2xl font-bold">
                    내역명
                </div>
                <div class="pt-1 font-bold">
                    <span class="text-lg">
                        YY년 MM월 DD일 |
                    </span>
                    <span class="text-lg">
                        PM 10:00
                    </span>
                </div>
                <div class="text-lg">
                    100,000,000,000,000,000
                </div>
            </div>
            <router-link to="/detailDateList">
                <button class="pr-3 pt-8 text-xl">
                    <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                </button>
            </router-link>
        </div>    
    </div>
</template>   


<script>
    
</script>

<style></style>