<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            모금 알림
        </div>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-20 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 사용자 프로필 사진 -->
            <div class="w-1/5 self-center pl-3 text-center">
                <i class="fa-solid fa-circle-user text-4xl"></i>
                <div class="font-bold">
                    참여자
                </div>
            </div>
            <div class="w-3/5 self-center">
                <!-- 모금 이름 -->
                <div class="text-2xl font-bold">
                    모금 이름
                </div>
                
                <!-- 메시지 -->
                <div class="pl-1 text-lg">
                    모금에 참여해주세요.
                </div>
            </div>
            <button class="w-1/10 self-center pr-3 text-xl">
                <i class="px-2 py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style></style>