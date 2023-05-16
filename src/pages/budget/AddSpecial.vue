<template>
    <div class="h-screen overflow-scroll">
        <!-- 상단 -->
        <div class="items-center bg-mainblue">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="pl-4 font-bold text-2xl text-white">
                    특별 예산 계획
                </div>
            </div>
            <div class="flex justify-end w-full h-16 bg-mainblue text-white text-2xl pr-3">
                <div class="underline mr-1">100,000,000,000,000</div>
                <div>원</div>
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
                <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="추가하세요"/>
            </div>
        </div>
    </div>
    <!-- 하단 버튼 -->
    <div class="absolute inset-x-0 bottom-0 px-6 py-3">
        <button class="w-full py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
            저장
        </button>
    </div>
</template>

<script>
</script>
<style>
</style>