<template>
    <!-- 상단 중앙 진행, 완료 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            진행
        </button>
        <button @click="$router.push('/completedMissionMain')"
            class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            완료
        </button>
    </div>
    

    <!-- 상단 우측 검색, 알림 버튼 -->
    <div class="fixed top-0 right-0 px-3 py-6">
        <router-link to="missionSearch">
        <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
        </button>
        </router-link>
        <router-link to="missionInfo">
        <button class="flex-col cursor-pointer place-content-end hover:bg-mainyellow hover:bg-opacity-20 rounded-full">
            <i class="px-2 py-1 fa-solid fa-bell text-2xl"></i>
        </button>
        </router-link>
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
            <div class="w-4/5 ml-3">
                <div class="flex">
                    <!-- 미션 이름 -->
                    <div class="text-2xl font-bold mr-5">
                        미션명
                    </div>
                    <div class="pt-1 font-bold">
                        <span class="text-lg">
                            보상:
                        </span>
                        <span class="text-xl">
                            100,000
                        </span>
                        <span class="text-lg">
                            원
                        </span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                        <!-- 보상 금액 -->
                        <div class="pt-1 font-bold text-gray-500">
                            <span class="text-lg">
                                설명입니다.
                            </span>
                        </div>
                        <!-- 기간 -->
                        <div class="text-lg text-gray-500">
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
                    <router-link to="detailMission">
                        <button class="pr-5 text-xl">
                            <i class="py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!-- 하단 우측 내 미션, 추가 버튼 -->
    <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
        <!-- 내 미션 버튼 -->
        <router-link to="myMission">
        <div class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-medal bg-skyblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
        </div>
        </router-link>
        <!-- 미션 추가 버튼 -->
        <div @click="showSelectMissionTypeModal= true" class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-plus bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
        </div>
    </div>
    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
    <SelectMissionTypeModal v-if="showSelectMissionTypeModal" @close-modal="showSelectMissionTypeModal = false"></SelectMissionTypeModal>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';
import SelectMissionTypeModal from './SelectMissionTypeModal.vue';

export default {
    data() {
        return {
            showSelectMissionTypeModal: false,
        }
    },
    components: {
        ButtomTab,
        SelectMissionTypeModal,
    }
}
</script>
<style></style>