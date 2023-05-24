<template>
    <div class="h-screen overflow-scroll">
        <!-- 상단 -->
        <div class="items-center bg-mainblue  text-white">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="pl-4 font-bold text-2xl text-white">
                    특별 예산 계획
                </div>
            </div>
            <div class="pr-2 py-8 border-b border-gray-100 text-end font-bold text-2xl">
                <input v-model="a" type="text" class="rounded bg-transparent text-end" placeholder="0"/>
                    <span class="pl-1">원</span>
            </div>
        </div>
        <!-- 상세 입력 -->
        <div class="m-10 mb-48 h-3/5 divide-y divide-gray-500">
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">예산명</div>
                <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">시작날짜</div>
                <input type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400"/>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">종료날짜</div>
                <input type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400"/>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">사진</div>
                <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">유형</div>
                <div @click="showTypeAddModal = true" class="text-gray-400">
                    <i class="fa-regular fa-square-plus"></i>
                    추가하세요
                </div>
            </div>
        </div>
    </div>
    <!-- 하단 버튼 -->
    <div class="absolute inset-x-0 bottom-0 px-6 py-3">
        <button @click="showSaveSpecialPlanModal = true" class="w-full py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
            저장
        </button>
    </div>
    <!-- 팝업 -->
    <TypeAddModal v-if="showTypeAddModal" @close-modal="showTypeAddModal = false"></TypeAddModal>
    <SaveSpecialPlanModal v-if="showSaveSpecialPlanModal" @close-modal="showSaveSpecialPlanModal = false"></SaveSpecialPlanModal>
</template>
<script>
import TypeAddModal from './TypeAddModal.vue';
import SaveSpecialPlanModal from './SaveSpecialPlanModal.vue'

export default {
    components: {
        TypeAddModal,
        SaveSpecialPlanModal,
    },
    data() {
        return {
            showTypeAddModal: false,
            showSaveSpecialPlanModal: false,
        }
    },
}
</script>
<style>
</style>