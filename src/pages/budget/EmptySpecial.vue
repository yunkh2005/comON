<template lang="">
    <!-- 상단 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <div v-if="isMonthlyEmpty"
            class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-l-full">
            <router-link to="/emptyMonthly"> <!--월별 예산이 비었다면-->
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

    <!-- 중앙 내용 -->
    <div class="absolute flex flex-col justify-center inset-0 mx-5 mt-24 mb-20 overflow-y-auto bg-gray-100 text-center">
        <!-- 안내 문구 -->
        <div class="flex-col place-self-center text-2xl font-bold">
            <i class="p-4 fa-regular fa-star text-5xl"></i>
            <div>
                계획된 특별 예산이
            </div>
            <div>
                없습니다.
            </div>
        </div>
        <!-- 계획 하러가기 버튼 -->
        <router-link to="addSpecial">
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
import TopButton from '../../components/public/TopButton.vue';

export default {
    components: {
        ButtomTab,
        TopButton,
    },
    data() {
        return {
            isMonthlyEmpty: true,
        }
    }
}
</script>
<style lang="">
    
</style>