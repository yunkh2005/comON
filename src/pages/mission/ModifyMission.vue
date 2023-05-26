<template>
    <!-- 상단 -->
    <div class="items-center bg-mainblue">
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <router-link to="missionMain">
            <button class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
            </router-link>
            <!-- 화면명 -->
            <div class="pl-4 font-bold text-2xl text-white">
                미션 수정
            </div>
        </div>
        <!-- 사진 입력 -->
        <div class="flex items-center w-full h-56 bg-mainblue">
            <i class="fa-solid fa-users-viewfinder m-auto text-5xl text-white"></i>
        </div>
    </div>
    <!-- 상세 입력 -->
    <div class="divide-y-2 divide-gray-300 lg:w-1/2 lg:m-auto lg:mt-10 m-10">
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">미션명</div>
            <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="미션명"/>
        </div>
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">보상</div>
            <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="10,000"/>
            <div v-if="isPayer" class="w-/5 font-bold">주기</div>
            <div v-else class="w-/5 font-bold">받기</div>
        </div>
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">설명</div>
            <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="설명입니다"/>
        </div>
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">기간</div>
            <input v-model="startDate" type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400" :min="todayDate"/>
            <div class="px-3">~</div>
            <input type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400" :min="startDate"/>
        </div>
    </div>
    <!-- 하단 버튼 -->
    <div class="absolute inset-x-0 bottom-0 px-6 py-3">
        <button @click="showModifyMissionModal = true" class="w-full py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-mainblue text-white text-lg font-semibold rounded-lg">
            수정
        </button>
    </div>
    <!-- 팝업 -->
    <ModifyMissionModal v-if="showModifyMissionModal" @close-modal="showModifyMissionModal = false"></ModifyMissionModal>
</template>

<script>
import ModifyMissionModal from './ModifyMissionModal.vue'

export default {
	components: { 
        ModifyMissionModal,
	},
    data(){
        return{
            showModifyMissionModal: false,
            isPayer: false,  //지급자, 수령자 구분
            todayDate: new Date().toISOString().split("T")[0],
            startDate: new Date().toISOString().split("T")[0],
        }
    },
    methods: {
    
    },
}
</script>

<style></style>