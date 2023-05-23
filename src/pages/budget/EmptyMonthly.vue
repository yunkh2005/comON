<template lang="">
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

    <!-- 중앙 내용 -->
    <div class="absolute flex flex-col justify-center inset-0 mx-5 mt-36 mb-20 overflow-y-auto bg-gray-100 text-center">
        <!-- 안내 문구 -->
        <div class="flex-col place-self-center text-2xl font-bold">
            <i class="p-4 fa-regular fa-calendar-xmark text-5xl"></i>
            <div>
                계획된 월별 예산이
            </div>
            <div>
                없습니다.
            </div>
        </div>
        <!-- 계획 하러가기 버튼 -->
        <router-link to="/monthlyplan">
            <button class="w-1/2 p-2 m-3 self-center bg-mainyellow rounded-full text-white text-xl ">
                <div class="ml-2 font-bold text-center">
                    계획하기
                    <i class="fa-solid fa-chevron-right pl-1"></i>
                </div>
            </button>
        </router-link>
    </div>

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
        return {
            isSpecialEmpty: true,
        }
    }
}
</script>
<style lang="">
    
</style>