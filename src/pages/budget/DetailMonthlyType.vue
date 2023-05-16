<template>
    <div class="h-screen overflow-scroll">
        <!-- 상단 -->
        <div class="items-center bg-mainblue">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="pl-4 font-bold text-2xl text-white">
                    유형 예산
                </div>
            </div>
            <div class="felx flex justify-end w-full font-bold text-white pr-3 my-6">
                <div>총 건수:</div>
                <div class="mx-3 text-xl">NN</div>
                <div>건</div>
            </div>
            <div class="flex justify-end w-full text-white pr-3">
                <div>계획 금액: </div>
                <div class="ml-3">100,000,000,000,000</div>
                <div>원</div>
            </div>
            <div class="flex justify-end w-full text-white pr-3 pb-3">
                <div>지출 금액: </div>
                <div class="ml-3">100,000,000,000,000</div>
                <div>원</div>
            </div>
        </div>
        <div class="mx-3 mt-3">
            <div class="text-xl font-bold text-mainblue">DD일</div>
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
            </div>    
        </div>
    </div>
</template>

<script>
</script>

<style></style>