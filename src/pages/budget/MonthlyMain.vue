<template>
    <!-- 상단 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            월별
        </button>
        <div v-if="isSpecialEmpty" class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            <router-link to="/emptySpecial">
                특별
            </router-link>
        </div>
        <div v-else class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            <router-link to="/specialMain">
                특별
            </router-link>
        </div>
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

    
    <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="name in categoryName" :key="name">
            <!-- 모금 설명 사진 -->
            <div class="w-1/4 self-center pl-3 text-4xl text-center">
                <i class="fa-solid fa-users-viewfinder"></i>
            </div>
            <div class="w-3/5 text-end">
                <!-- 내역 이름 -->
                <div class="grid grid-cols-2 font-bold">
                    <div class="text-2xl lg:text-lg text-start">
                        {{ name }}
                    </div>
                    <div class="pl-1 self-center font-bold">
                        <span>
                            100,000
                        </span>
                        <span>
                            원
                        </span>
                    </div>
                </div>
                <!-- 목표 금액 -->
                <div class="pt-1">
                    <span>
                        계획금액: 
                    </span>
                    <span>
                        100,000,000,000
                    </span>
                    <span class="text-lg font-bold">
                        원
                    </span>
                </div>
            </div>
            <router-link to="/detailMonthlyType">
                <button class="self-center pr-3 pt-4 text-xl">
                    <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                </button>
            </router-link>
        </div>
    
    <!-- 하단 우측 수정 버튼 -->
    <router-link to="monthlyPlan">
        <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
            <!-- 수정 버튼 -->
            <div class="flex flex-row cursor-pointer place-content-end p-3">
                <i class="px-3 py-2 fa-solid fa-pen bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
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
            isSpecialEmpty: false,
            categoryName: ['식비', '카페/간식', '술/유흥'],
        }
    }
}
</script>
<style></style>