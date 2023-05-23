<template>
    <CompletedMissionMain v-if="showCompletedMissionMain" @close-completed="showCompletedMissionMain = false"></CompletedMissionMain>
    <div v-else>
        <!-- 상단 중앙 진행, 완료 선택 버튼 -->
        <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
            <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
                진행
            </button>
            <button @click="showCompletedMissionMain = true"
                class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
                완료
            </button>
        </div>
    
        <!-- 상단 우측 검색, 알림 버튼 -->
        <div class="fixed top-0 right-0 px-3 py-6">
            <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
                <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
            </button>
            <button class="flex-col cursor-pointer place-content-end hover:bg-mainyellow hover:bg-opacity-20 rounded-full">
                <i class="px-2 py-1 fa-solid fa-bell text-2xl"></i>
            </button>
        </div>

        <!-- 중앙 내용 -->
        <div class="absolute inset-0 mx-5 mt-20 mb-20 overflow-y-auto">
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

            <!-- 상단 우측 검색, 알림 버튼 -->
            <div class="fixed top-0 right-0 px-3 py-6">
                <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
                    <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
                </button>
                <button class="flex-col cursor-pointer place-content-end hover:bg-mainyellow hover:bg-opacity-20 rounded-full">
                    <i class="px-2 py-1 fa-solid fa-bell text-2xl"></i>
                </button>
            </div>
        </div>    
    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
    <!-- 미션 생성시 유형 선택 팝업 -->
    <SelectMissionTypeModal v-if="showSelectMissionTypeModal" @close-modal="showSelectMissionTypeModal = false"></SelectMissionTypeModal>
    </div>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';
import SelectMissionTypeModal from './SelectMissionTypeModal.vue';
import CompletedMissionMain from './CompletedMissionMain.vue';

export default {
    data() {
        return {
            showSelectMissionTypeModal: false,
            showCompletedMissionMain:false,
        }
    },
    components: {
        ButtomTab,
        SelectMissionTypeModal,
        CompletedMissionMain,
    }
}
</script>
<style></style>