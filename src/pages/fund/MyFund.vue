<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            내 모금
        </div>
    </div>

    <!-- 상단 중앙 진행, 완료 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-3">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            진행
        </button>
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            완료
        </button>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100" v-for="message in 100" :key="message">
            <!-- 사용자 프로필 사진 -->
            <div class="self-center pl-3 text-3xl">
                <i class="fa-solid fa-users-viewfinder"></i>
            </div>
            <div class="self-center">
                <!-- 모금 이름 -->
                <div class="grid grid-cols-2 font-bold">
                    <div class="text-2xl">
                        모금 이름
                    </div>
                    <div class="self-center">
                        <span>
                            D-
                        </span>
                        <span>
                            DAY
                        </span>
                    </div>
                </div>
                <!-- 목표 금액 -->
                <div>
                    <span class="font-bold">
                        목표 금액:
                    </span>
                    <span>
                        100,000,000,000,000
                    </span>
                    <span class="font-bold">
                        원
                    </span>
                </div>
                <!-- 그래프 -->
                <div>
                    그래프
                </div>
            </div>
            <button class="self-center pr-3 text-xl">
                <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style></style>