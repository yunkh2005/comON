<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center bg-mainblue">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl text-white">
            모금 생성
        </div>
    </div>
    <!-- 사진 입력 -->
    <div class="flex justify-center w-full h-56 bg-mainblue">
        <i class="fa-solid fa-users-viewfinder m-auto text-5xl text-white"></i>
    </div>
    <!-- 상세 입력 -->
    <div class="divide-y-2 divide-mainblue lg:w-1/2 lg:m-auto lg:mt-10 m-10">
        <div class="flex justify-between pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">미션제목</div>
            <input type="text" class="rounded w-full focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
        </div>
        <div class="flex justify-between pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">목표금액</div>
            <input type="text" class="rounded w-full focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
        </div>
        <div class="flex justify-between pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">설명</div>
            <input type="text" class="rounded w-full focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
        </div>
        <div class="flex justify-between pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">기간</div>
            <input type="date" class="rounded w-full focus:ring-2 focus:border-primary focus:outline-none text-gray-400"/>
        </div>
    </div>
    <!-- 하단 버튼 -->
    <div class="absolute inset-x-0 bottom-0 px-6 py-3">
        <button class="w-full py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-mainblue text-white text-lg font-semibold rounded-lg">
            생성
        </button>
    </div>
</template>

<script>
import PublicModal from '../../components/public/PublicModal.vue';

export default {
	components: { 
		PublicModal,
	},
    data(){
        return{
        }
    },
    methods: {
    },
}
</script>

<style></style>