<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center bg-mainblue text-white">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            <span>yy</span>
            <span class="pr-1">년</span>
            <span>mm</span>
            <span class="pr-1">월</span>
            <span>dd</span>
            <span>일 내역</span>
        </div>
    </div>

    <!-- 금액 안내 -->
    <div class="pb-5 flex flex-col bg-mainblue text-white pr-3">
        <div class="flex justify-end text-2xl font-bold">
            <span class="pr-1">총 건수:</span>
            <span class="pr-1">NNN</span>
            <span>건</span>
        </div>
        <!-- 수입 -->
        <div class="pt-2 flex justify-end text-xl font-bold">
            <span class="pr-2">수입</span>
            <span class="pr-1 font-normal">100,000,000,000,000,000</span>
            <span>원</span>
        </div>
        <!-- 지출 -->
        <div class="flex justify-end text-xl font-bold">
            <span class="pr-2">지출</span>
            <span class="pr-1 font-normal">100,000,000,000,000,000</span>
            <span>원</span>
        </div>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-48 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 모금 설명 사진 -->
            <div class="w-1/5 self-center pl-3 text-4xl text-center">
                <i class="fa-solid fa-users-viewfinder"></i>
            </div>
            <div class="w-3/5 self-center">
                <!-- 내역 이름 -->
                <div class="grid grid-cols-2 font-bold">
                    <div class="text-2xl lg:text-lg">
                        내역 이름
                    </div>
                    <div class="pl-1 self-center font-bold">
                        <span>
                            시간
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
<style>
    
</style>