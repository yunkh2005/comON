<template>
    <div class="h-screen overflow-auto">
        <!-- 상단 -->
        <div class="items-center bg-mainblue text-white">
            <div class="flex p-2 items-center">
                <!-- 닫기 버튼 -->
                <button class="fa-solid fa-arrow-left text-xl p-2 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
                <!-- 화면명 -->
                <div class="flex-col pl-4 font-bold text-2xl">
                    지출 추가
                </div>
            </div>
            <div class="flex justify-end mx-3 py-14 text-2xl font-bold">
                <div class="underline mr-2">0</div>
                <div>원</div>
            </div>
        </div>
        <!-- 상세 입력 -->
        <div class="m-10 mb-20 h-3/5 divide-y divide-gray-500 text-mainblue">
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">내역명</div>
                <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">유형</div>
                <select class="w-1/2 rounded-md ring-1 ring-inset ring-gray-700 focus:ring-mainblue text-sm text-gray-400">
                    <option selected>선택하세요</option>
                    <option>유형1</option>
                    <option>유형2</option>
                    <option>유형3</option>
                </select>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">날짜</div>
                <div>
                    <input type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400"/>
                    <div class="w-1/2 text-gray-400 mt-1">
                        <div class="flex text-lg">
                            <select class="pr-2">
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                            <select>
                                <option selected>0</option>
                                <option v-for="i in 23" :key="i">{{ i }}</option>
                            </select>
                            <span class="px-2">:</span>
                            <select class="">
                                <option selected>00</option>
                                <option v-for="i in 59" :key="i">{{ i }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">공개여부</div>
                <select class="w-1/2 rounded-md ring-1 ring-inset ring-gray-700 focus:ring-mainblue text-sm text-gray-400" placeholder="선택하세요">
                    <option>공개</option>
                    <option>비공개</option>
                </select>    
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">태그</div>
                <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요 (3개 이하)"/>
            </div>
            <div class="flex mb-5 pt-9">
                <div class="font-bold text-2xl w-1/3">메모</div>
                <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none" placeholder="입력하세요"/>
            </div>
        </div>
        <!-- 하단 버튼 -->
        <div class="absolute inset-x-0 bottom-0 px-6 py-3">
            <button class="w-full py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                저장
            </button>
        </div>
    </div>    
</template>


<script>
    export default {    
        data() {
            return{
            } 
        }
    }
</script>


<style></style>