<template>
    <div class="h-screen overflow-scroll">
        <!-- 상단 -->
        <div class="items-center bg-mainblue">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="pl-4 font-bold text-2xl text-white">
                    특별 예산
                </div>
            </div>
            <!-- 사진 -->
            <div class="flex items-center w-full h-56 bg-mainblue">
                <i class="fa-solid fa-users-viewfinder m-auto text-5xl text-white"></i>
            </div>
        </div>
        <!-- 상세 -->
        <div class="mx-10 mb-20">
            <div class="flex font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">총액</div>
                <div class="text-lg w-2/3 text-gray-700">내역명</div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">시작날짜</div>
                <div class="text-sm md:text-lg text-gray-700">yy년 mm월 dd일 | PM10:00</div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">종료날짜</div>
                <div class="text-sm md:text-lg w-2/3 text-gray-700">yy년 mm월 dd일 | PM10:00</div>
            </div>
            <div class="flex w-full font-bold mb-5 pt-9">
                <div class="text-2xl w-1/3">유형</div>
                <div class="flex flex-col w-2/3 h-56 overflow-scroll">
                    <div class="mb-3" v-for="i in 3">
                        <div class="bg-gray-100 rounded-md p-3">
                            <div class="flex">
                                <i class="fa-solid fa-circle text-skyblue text-2xl"></i>
                                <span class="text-xl ml-3">유형명</span>
                            </div>
                            <div class="text-end">
                                <span class="underline mx-1">0</span>
                                <span>원</span>
                            </div>
                            <div class="text-end text-gray-500">
                                <span class="mx-1">계좌금액: </span>
                                <span>100,000,000,000,000</span>
                                <span>원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 하단 버튼 -->
        <div class="flex absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-1/5 py-1 bg-gray-100 hover:bg-skyblue text-lg font-semibold rounded-lg hover:text-white">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button class="w-4/5 ml-5 py-1 bg-skyblue hover:opacity-70 text-lg font-semibold rounded-lg text-white">
                수정
            </button>
        </div>
    </div>
</template>

<script>
</script>

<style></style>