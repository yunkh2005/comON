<template>
    <div class="h-screen">
        <!-- 상단 -->
        <div class="items-center bg-mainblue">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-white text-xl p-2 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="flex-col pl-4 font-bold text-2xl text-white">
                    미션 이름
                </div>
                <div class="flex-col pl-4 font-bold text-lg text-white">
                    D-day
                </div>
            </div>
            <!-- 사진 입력 -->
            <div class="flex items-center w-full h-56 bg-mainblue">
                <i class="fa-solid fa-users-viewfinder m-auto text-5xl text-white"></i>
            </div>
        </div>
        <!-- 상세 입력 -->
        <div class="lg:w-1/2 lg:m-auto lg:mt-10 m-10 h-3/5 sm:h-2/5">
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">보상</div>
                <div>100,000,000 원</div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">설명</div>
                <div>설명입니다.</div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">기간</div>
                <div class="text-xs sm:text-sm">2023/03/01 ~ 2023/03/31</div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">참여자</div>
                <div class="flex flex-col sm:w-1/2 md:w-1/3 lg:w-2/5">
                    <div class="grid md:grid-cols-3 sm:grid-cols-2 justify-items-end">
                        <div class="flex">
                            <i class="fa-solid fa-circle-user pt-1"></i>
                            <div class="ml-3">이름</div>
                        </div>
                        <div class="flex">
                            <i class="fa-solid fa-circle-user pt-1"></i>
                            <div class="ml-3">이름</div>
                        </div>
                        <div class="flex">
                            <i class="fa-solid fa-circle-user pt-1"></i>
                            <div class="ml-3">이름</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 하단 버튼 -->
        <div v-if="isCreator" class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-1/5 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button @click="showDeleteMissionModal= true" class="w-1/5 py-1 ml-5 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-trash"></i>
            </button>
            <div v-if="isPayer" class="w-3/5 ml-5 py-1 bg-skyblue hover:bg-opacity-70 text-lg font-semibold rounded-lg text-white text-center">
                <button v-if="isHaveParticipant" @click="showRewardMissionModal = true" >
                    보상 주기
                </button>
                <button v-else-if="isComplete">
                    보상 지급 완료
                </button>
                <button v-else>
                    수정
                </button>
            </div>
            <div v-else class="w-3/5 ml-5 py-1 bg-skyblue hover:bg-opacity-70 text-lg font-semibold rounded-lg text-white text-center">
                <button v-if="isComplete">
                    보상 수령 완료
                </button>
                <button v-else>
                    수정
                </button>
            </div>
        </div>
        <div v-else class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-1/5 py-1 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button v-if="isComplete" class="w-4/5 ml-5 py-1 bg-skyblue hover:bg-mainblue text-lg font-semibold rounded-lg text-white">
                미션 완료
            </button>
            <button v-else @click="showEnterFundModal = true" class="w-4/5 ml-5 py-1 bg-skyblue hover:bg-opacity-70 text-lg font-semibold rounded-lg text-white">
                참여
            </button>
        </div>
    </div>
    <!-- 팝업 -->
    <EnterMissionModal v-if="showEnterFundModal" @close-modal="showEnterFundModal = false"></EnterMissionModal>
    <RewardMissionModal v-if="showRewardMissionModal" @close-modal="showRewardMissionModal = false"></RewardMissionModal>
    <DeleteMissionModal v-if="showDeleteMissionModal" @close-modal="showDeleteMissionModal = false"></DeleteMissionModal>
</template>

<script>
import EnterMissionModal from './EnterMissionModal.vue'
import RewardMissionModal from './RewardMissionModal.vue'
import DeleteMissionModal from './DeleteMissionModal.vue'

    export default {
        components: {
            EnterMissionModal,
            RewardMissionModal,
            DeleteMissionModal,
        },
        data(){
            return{
                isCreator: true,          //생성자인지 아닌지 구분
                isPayer: false,            //지급자인지 수령자인지 구분
                isHaveParticipant: true,  //참여자가 있는지 구분
                isComplete: false,          //완료된 미션인지 구분
                showEnterFundModal: false,
                showRewardMissionModal: false,
                showDeleteMissionModal: false,
            }
        },
        methods: {
        },
}
</script>

<style></style>