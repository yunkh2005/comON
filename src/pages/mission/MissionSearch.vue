<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            미션 검색
        </div>
    </div>

    <!-- 검색어 입력 창 -->
    <div class="flex items-center px-5 pb-5 cursor-pointer">
        <input 
            placeholder="검색어를 입력하세요."
            type="text"
            class="w-full p-2 bg-gray-200 focus:outline-none rounded-full text-center">
    </div>

    <!-- 선택 버튼 -->
    <div class="flex items-center w-full px-24 cursor-pointer">
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-l-full">
            진행
        </button>
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            완료
        </button>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-32 mb-20 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 사용자 프로필 사진 -->
            <div class="w-1/5 self-center pl-3 text-center">
                <i class="fa-solid fa-circle-user text-4xl"></i>
                <div class="font-bold">
                    생성자
                </div>
            </div>
            <div class="w-3/5 self-center">
                <!-- 미션 이름 -->
                <div class="text-2xl font-bold">
                    미션 이름
                </div>
                <!-- 보상 금액 -->
                <div class="pt-1 font-bold">
                    <span class="text-lg">
                        보상:
                    </span>
                    <span class="text-xl">
                        100,000,000
                    </span>
                    <span class="text-lg">
                        원
                    </span>
                </div>
                <!-- 기간 -->
                <div class="text-lg text-center">
                    <span class="font-bold">
                        YY.MM.DD
                    </span>
                    <span>
                        ~
                    </span>
                    <span class="font-bold">
                        YY.MM.DD
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
<style lang="">
    
</style>