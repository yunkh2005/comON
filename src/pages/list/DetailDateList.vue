<template>
    <div class="h-screen overflow-auto">
        <!-- 상단 -->
        <div class="items-center bg-mainblue text-white">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-xl p-2 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="flex-col pl-4 font-bold text-2xl">
                    상세 내역
                </div>
            </div>
            <!-- 총 금액 -->
            <div class="flex justify-end mx-3 py-14 text-2xl font-bold">
                <div class="underline mr-2">100,000,000,000,000</div>
                <div>원</div>
            </div>
        </div>
        <!-- 상세 -->
        <div class="m-10 mb-20 h-3/5 divide-y divide-gray-500 text-mainblue">
            <div class="flex font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">내역명</div>
                <div class="text-lg w-2/3 text-gray-700">내역명</div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">유형</div>
                <div class="text-lg w-2/3 text-gray-700">유형</div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">날짜</div>
                <div class="text-sm md:text-lg w-2/3 text-gray-700">yy년 mm월 dd일 | PM10:00</div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">태그</div>
                <div class="flex text-2g3w-3/4 text-gray-700">
                    <div class="m-1">#태그1</div>
                    <div class="m-1">#태그2</div>
                    <div class="m-1">#태그3</div>
                </div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">메모</div>
                <div class="text-lg w-2/3 text-gray-700">메모</div>
            </div>
        </div>
        <!-- 하단 버튼 -->
        <div class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button @click="showDeleteListModal = true" class="w-1/5 py-1 bg-gray-100 hover:bg-skyblue text-lg font-semibold rounded-lg hover:text-white">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button @click="$router.push('/modifyList')" class="w-4/5 ml-5 py-1 bg-skyblue hover:opacity-70 text-lg font-semibold rounded-lg text-white">
                수정
            </button>
        </div>
    </div>
    <DeleteListModal v-if="showDeleteListModal" @close-modal="showDeleteListModal = false"></DeleteListModal>
</template>

<script>
import DeleteListModal from './DeleteListModal.vue'

export default {
    data(){
        return{
            showDeleteListModal: false,
        }
    },
    components: {
        DeleteListModal,
    }
}
</script>

<style></style>