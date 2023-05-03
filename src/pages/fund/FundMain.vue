<template>
    <!-- 상단 중앙 진행, 완료 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-6">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            진행
        </button>
        <button class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            완료
        </button>
    </div>

    <!-- 상단 우측 검색, 알림 버튼 -->
    <div class="fixed top-0 right-0 px-3 py-6">
        <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <i class="px-2 py-1 fa-solid fa-magnifying-glass text-2xl"></i>
        </button>
        <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <i class="px-2 py-1 fa-solid fa-bell text-2xl"></i>
        </button>
    </div>

    <!-- 중앙 내용 -->


    <!-- 하단 우측 내 모금, 추가 버튼 -->
    <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
        <!-- 내 모금 버튼 -->
        <div class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-user bg-skyblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
        </div>
        <!-- 모금 추가 버튼 -->
        <div class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-plus bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
        </div>
    </div>

    <!-- 하단 탭 -->
    <ButtomTab></ButtomTab>
</template>
<script>
import ButtomTab from '../../components/public/ButtomTab.vue';

export default {
    components: { 
		ButtomTab,
	}
}
</script>
<style></style>