<template>
    <div class="h-screen">
        <!-- 상단 -->
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-2xl">
                특별 예산 검색
            </div>
        </div>

        <!-- 검색어 입력 창 -->
        <div class="flex items-center px-5 pb-5 cursor-pointer">
            <input 
                placeholder="검색어를 입력하세요."
                type="text"
                class="w-full p-2 bg-gray-200 focus:outline-none rounded-full text-center">
        </div>

        <!-- 중앙 내용 -->
        <div v-if="!isEmpty" class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto">
            <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 10" :key="message">
                <!-- 예산 설명 사진 -->
                <div class="w-1/5 self-center pl-3 text-4xl text-center">
                    <i class="fa-solid fa-users-viewfinder"></i>
                </div>
                <div class="w-3/5 self-center">
                    <!-- 예산 이름 -->
                    <div class="text-2xl font-bold">
                        예산 이름
                    </div>
                    <!-- 목표 금액 -->
                    <div class="pt-1 font-bold">
                        <span class="text-lg">
                            YY-MM-DD
                        </span>
                        <span>
                            ~
                        </span>
                        <span class="text-lg">
                            YY-MM-DD
                        </span>
                    </div>
                    <!-- 총액 -->
                    <div>
                        <span class="font-bold">총액:</span>
                        <span class="pl-1">100,000,000,000,000</span>
                        <span class="font-bold">원</span>
                    </div>
                </div>
                <button class="w-1/10 self-center pr-3 text-xl">
                    <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                </button>
            </div>
        </div>
        <div v-else class="bg-gray-100 h-4/5 mx-5 text-center py-64 text-lg font-bold">
            검색 결과가 없습니다
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isEmpty: false,
        }
    }
}
</script>
<style lang="">
    
</style>