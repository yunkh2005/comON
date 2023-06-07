<template>
    <div>
        <!-- 상단 중앙 진행, 완료 선택 버튼 -->
        <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
            <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
                진행
            </button>
            <router-link to="/completedFundMain" class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
                완료
            </router-link>
        </div>
            <!-- 상단 우측 검색, 알림 버튼 -->
            <div class="fixed top-0 right-0 px-3 py-6">
            <router-link to="fundSearch">
                <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
                    <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
                </button>
            </router-link>
            <router-link to="fundInfo">
                <button class="flex-col cursor-pointer place-content-end hover:bg-mainyellow hover:bg-opacity-20 rounded-full">
                    <i class="px-2 py-1 fa-solid fa-bell text-2xl"></i>
                </button>
            </router-link>
        </div>

        <!-- 중앙 내용 -->
        <div class="absolute inset-0 mx-5 mt-20 mb-20 overflow-y-auto">
            <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
                <!-- 모금 설명 사진 -->
                <div class="w-1/5 self-center pl-3 text-4xl text-center">
                    <i class="fa-solid fa-users-viewfinder"></i>
                </div>
                <div class="w-3/5 self-center">
                    <!-- 모금 이름 -->
                    <div class="grid grid-cols-2 font-bold">
                        <div class="text-2xl">
                            모금명
                        </div>
                    </div>
                    <!-- 목표 금액 -->
                    <div class="pt-1 font-bold">
                        <span class="text-lg">
                            목표:
                        </span>
                        <span class="text-xl">
                            100,000,000
                        </span>
                        <span class="text-lg">
                            원
                        </span>
                    </div>
                    <!-- 그래프 -->
                    <div class="ring-1 ring-black mt-3">
                        <div class="w-4/5 bg-skyblue text-white text-center">80,000,000원</div>
                    </div>
                </div>
                <div>
                    <router-link to="/detailFund">
                        <button class="w-1/10 self-center pr-3 pt-8 text-xl">
                            <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 하단 우측 버튼 -->
        <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
            <router-link to="/myFund" class="flex flex-row cursor-pointer place-content-end p-3">
                <i class="px-3 py-2 fa-solid fa-circle-user bg-skyblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
            </router-link>
            <router-link to="/createFund" class="flex flex-row cursor-pointer place-content-end p-3">
                <i class="px-3 py-2 fa-solid fa-plus bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
            </router-link>
        </div>

        <!-- 하단 탭 -->
        <ButtomTab></ButtomTab>
    </div>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';

export default {
    components: { 
		ButtomTab,
	},
    data(){
        return{
        }
    }
}
</script>

<style></style>