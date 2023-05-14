<template>
    <div class="h-screen overflow-auto">
        <!-- 상단 -->
        <div class="items-center">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-xl p-2 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="flex-col pl-4 font-bold text-2xl">
                    내 상세 내역
                </div>
            </div>
        </div>
        <!-- 총 금액 -->
        <div class="flex justify-end mx-3 mt-12 mb-20 text-2xl font-bold">
            <div class="underline text-mainblue mr-2">100,000,000,000,000</div>
            <div>원</div>
        </div>
        <div class="border-y-2"></div>
        <!-- 상세 -->
        <div class="m-10 mb-20 divide-y divide-gray-500">
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
                <div class="text-2xl w-1/3">공개여부</div>
                <div class="text-lg w-2/3 text-gray-700">공개</div>
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
            <button class="w-1/5 py-1 bg-gray-100 hover:bg-skyblue text-lg font-semibold rounded-lg hover:text-white">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button @click="showEnterFundModal = true" class="w-4/5 ml-5 py-1 bg-skyblue hover:opacity-70 text-lg font-semibold rounded-lg text-white">
                수정
            </button>
        </div>
    </div>
</template>

<script>

</script>

<style></style>