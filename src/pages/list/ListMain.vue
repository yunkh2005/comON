<template>
    <div>
        <top>
            <div class="flex justify-center items-center py-6 text-2xl font-bold">
                <i class="fa-solid fa-chevron-left"></i>
                <div class="mx-3">MM월</div>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="fixed top-0 right-0 px-3 py-6">
                <router-link to="/listSearch" class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
                    <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
                </router-link>
            </div>
        </top>
        <div class="bg-mainblue mx-5 rounded-md text-white p-4 text-xl">
            <div class="flex justify-between mx-6 mb-3">
                <div class="font-bold">수입</div>
                <div>100,000,000,000,000 원</div>
            </div>
            <div class="flex justify-between mx-6">
                <div class="font-bold">지출</div>
                <div>100,000,000,000,000 원</div>
            </div>
        </div>
        <div class="p-4 mt-5">
            <img src="../../components/asset/Calendar.png"/>
        </div>
        <!-- 하단 우측 버튼 -->
        <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
            <router-link to="/analysisOfIncome" class="flex flex-row cursor-pointer place-content-end p-3">
                <i class="px-3 py-2 fa-solid fa-wallet bg-skyblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
            </router-link>
            <div @click="showSelectListTypeModal = true" class="flex flex-row cursor-pointer place-content-end p-3">
                <i class="px-3 py-2 fa-solid fa-plus bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
            </div>
        </div>
        <ButtomTab></ButtomTab>
        <SelectListTypeModal v-if="showSelectListTypeModal" @close-modal="showSelectListTypeModal = false"></SelectListTypeModal>
    </div>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';
import SelectListTypeModal from './SelectListTypeModal.vue'

export default {
    components: {
        ButtomTab,
        SelectListTypeModal,
    },
    data(){
        return{
            showSelectListTypeModal: false,
        }
    }
}
</script>
<style></style>