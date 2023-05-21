<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button
            class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            내 메세지
        </div>
    </div>

    <!-- 상단 우측 버튼 -->
    <div class="fixed top-0 right-0 p-3">
        <button class="flex-col cursor-pointer place-content-end hover:bg-skyblue hover:bg-opacity-20 rounded-full">
            <!-- 조르기 사진 모아보기 -->
            <i class="px-2 py-1 fa-solid fa-images font-bold text-2xl"></i>
        </button>
    </div>

    <!-- 상단 중앙 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-3">
        <button @click="$emit('close-modal')" class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-l-full">
            수신
        </button>
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-r-full">
            발신
        </button>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-32 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 받은사람 정보 -->
            <div class="w-1/5 self-center pl-3 text-4xl text-center">
                <i class="fa-solid fa-user"></i>
                <div class="text-xs font-bold">
                    가족 이름
                </div>
            </div>
                    
            <div class="w-3/5 self-center">
                <!-- 보낸 메세지 -->
                <span class="text-xs">
                    보낸 메세지
                </span>
            </div>
                
            <!-- 보낸 사진 -->
            <button class="w-1/10 self-center pr-3 text-xl">
                <i class="fa-solid fa-image text-5xl"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style></style>