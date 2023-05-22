<template>
    <!-- 상단 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            월별
        </button>
        <button
            class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            특별
        </button>
    </div>

    <!-- 월 이동 버튼 -->
    <div class="flex absolute bg-white w-full">
        <!-- 이전 월 이동 버튼 -->
        <button class="w-1/3">
            <i class="fa-solid fa-chevron-left px-2 text-xl hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
        </button>
        <!-- 월 안내 -->
        <button class="w-1/3 font-extrabold text-2xl text-center hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <span>MM</span>
            <span>월</span>
        </button>
        <!-- 이후 월 이동 버튼 -->
        <button class="w-1/3 ">
            <i class="fa-solid fa-chevron-right px-2 text-xl hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
        </button>
    </div>

    <!-- 용돈 총 금액-->
    <div class="pt-12 mx-5">
        <div class="flex-col justify-between px-3 py-1 bg-mainblue rounded-lg text-white">
            <div class="py-1 font-bold text-end">
                <span class="underline text-2xl">100,000,000,000,000</span>
                <span class="text-xl">원 남음</span>
            </div>
            <div class="m-2 py-1 self-center text-center bg-gray-300 rounded-lg">
                그래프
            </div>
            <!-- 남은 금액  -->
            <div class="flex justify-around mx-2 mt-4 text-xl text-center">
                <span class="w-7 h-7 bg-gray-300 rounded-full"></span>
                <span class="pl-1 font-bold">
                    예산
                </span>
                <span class="text-end">
                    100,000,000,000,000
                </span>
                <span class="font-bold">
                    원
                </span>
            </div>
            <!-- 쓴 금액  -->
            <div class="flex justify-around m-2 text-xl text-center">
                <span class="w-7 h-7 bg-mainyellow rounded-full"></span>
                <span class="pl-1 font-bold">
                    지출
                </span>
                <span class="text-end">
                    100,000,000,000,000
                </span>
                <span class="font-bold">
                    원
                </span>
            </div>
        </div>
    </div>

    
    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mt-80 pt-2 mb-20 overflow-y-auto">
        <div class="flex mx-5 my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 유형 아이콘 -->
            <div class="flex items-center mx-2">
                <i class="fa-solid fa-circle-info text-3xl p-4 bg-gray-200 rounded-full"></i>
            </div>
            <div class="w-full">
                <!-- 유형 이름 -->
                <div class="text-2xl font-bold">
                    지출 유형 이름
                </div>
                <!-- 목표 금액 -->
                <div class="pt-1 pr-1 font-bold text-end">
                    <span class="underline text-2xl">
                        100,000,000,000,000
                    </span>
                    <span class="text-xl">
                        원
                    </span>
                </div>
                <!-- 계획 금액 -->
                <div class="pr-2 text-end">
                    <span>
                        계획:
                    </span>
                    <span class="text-lg">
                        100,000,000,000,000
                    </span>
                    <span>
                        원
                    </span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 하단 우측 수정 버튼 -->
    <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
        <!-- 수정 버튼 -->
        <div class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-pen bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
        </div>
    </div>

    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';

export default {
    components: { 
		ButtomTab,
	}
}
</script>
<style></style>