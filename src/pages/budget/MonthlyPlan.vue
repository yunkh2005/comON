<template>
    <div>
        <!-- 상단 화면 -->
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
            <!-- 화면명 -->
            <div class="flex-col pl-4 font-bold text-xl">
                월별 예산 계획
            </div>
        </div>

        <!-- 금액 -->
        <div class="pr-2 pb-3 border-b border-gray-100 text-end font-bold text-2xl">
                <span>100,000,000,000,000,000</span>
                <span>원</span>
        </div>

        <!-- 중앙 내용 -->
        <div class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto bg-gray-100">
            <div v-for="message in 100" :key="message">유형</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>