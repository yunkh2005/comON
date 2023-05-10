<template>
    <div class="h-screen">
        <!-- 상단 -->
        <div class="items-center bg-mainblue">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-white text-xl p-2 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="flex-col pl-4 font-bold text-2xl text-white">
                    모금 이름
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
                <div class="text-mainblue font-bold text-xl w-1/3">목표 금액</div>
                <div>100,000,000 원</div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">설명</div>
                <div>설명입니다.</div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">기간</div>
                <div>2023/03/01 ~ 2023/03/31</div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">진행도</div>
                <div class="flex flex-col w-1/2">
                    <div class="ring-1 ring-black">
                        <div class="w-4/5 bg-mainblue text-white text-center">80,000,000원</div>
                    </div>
                    <div class="text-sm ">
                        80%
                    </div>
                </div>
            </div>
            <div class="flex justify-between h-1/5">
                <div class="text-mainblue font-bold text-xl w-1/3">참여자</div>
                <div class="flex flex-col sm:w-1/2 md:w-1/3 lg:w-2/5">
                    <div v-if="isCreator" @click="showRequestFundModal = true" class="text-right text-skyblue hover:text-mainblue cursor-pointer">
                        <i class="fa-regular fa-square-plus"></i> 요청하기
                    </div>
                    <div class="flex justify-between">
                        <div class="flex">
                            <i class="fa-solid fa-circle-user pt-1"></i>
                            <div class="ml-3">이름</div>
                        </div>
                        <div class="">10,000원</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex">
                            <i class="fa-solid fa-circle-user pt-1"></i>
                            <div class="ml-3">이름</div>
                        </div>
                        <div class="">1,000,000원</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 하단 버튼 -->
        <div v-if="isCreator" class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-1/5 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button class="w-1/5 py-1 ml-5 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="w-1/5 py-1 ml-5 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button @click="showEnterFundModal = true" class="w-2/5 ml-5 bg-skyblue hover:opacity-70 text-lg font-semibold rounded-lg text-white">
                참여
            </button>
        </div>
        <div v-else class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-1/5 py-1 bg-gray-100 hover:bg-skyblue text-lg font-semibold rounded-lg hover:text-white">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button @click="showEnterFundModal = true" class="w-4/5 ml-5 py-1 bg-skyblue hover:opacity-70 text-lg font-semibold rounded-lg text-white">
                참여
            </button>
        </div>
    </div>
    <!-- 팝업 -->
    <EnterFundModal v-if="showEnterFundModal" @close-modal="showEnterFundModal = false"></EnterFundModal>
    <RequestFundModal v-if="showRequestFundModal" @close-modal="showRequestFundModal = false"></RequestFundModal>
</template>

<script>
import EnterFundModal from './EnterFundModal.vue'
import RequestFundModal from './RequestFundModal.vue';

    export default {
        components: {
            EnterFundModal,
            RequestFundModal,
        },
        data(){
            return{
                isCreator: true,
                showEnterFundModal: false,
                showRequestFundModal: false,
            }
        },
        methods: {
        },
}
</script>

<style></style>