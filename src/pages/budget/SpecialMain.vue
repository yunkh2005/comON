<template>
    <!-- 상단 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <div v-if="isMonthlyEmpty" 
            class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-l-full">
            <router-link to="/emptyMonthly">
                월별
            </router-link>
        </div>
        <div v-else 
            class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-l-full">
            <router-link to="/monthlyMain">
                월별
            </router-link>
        </div>
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-r-full">
            특별
        </button>
    </div>

    <!-- 상단 우측 버튼 -->
    <router-link to="/specialSearch">
        <div class="fixed top-0 right-0 px-3 py-6">
        <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
        </button>
        </div>
    </router-link>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-20 mb-20 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
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
            <router-link to="/detailSpecial">
                <button class="self-center pr-3 pt-7 text-xl">
                    <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                </button>
            </router-link>
        </div>
    </div>

    <!-- 하단 우측 버튼 -->
    <router-link to="/addSpecial">
        <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
            <!-- 모금 추가 버튼 -->
            <div class="flex flex-row cursor-pointer place-content-end p-3">
                <i class="px-3 py-2 fa-solid fa-plus bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
            </div>
        </div>
    </router-link>

    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';

export default {
    components: { 
		ButtomTab,
	},
    data() {
        return{
            isMonthlyEmpty: false,
        }
    }
}
</script>
<style></style>