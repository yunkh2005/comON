<template>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <router-link to="missionMain">
        <!-- 닫기 버튼 -->
        <button class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
        </router-link>
        <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            미션 알림
        </div>
    </div>

    <!-- 중앙 내용 -->
    <div class="absolute inset-0 mx-5 mt-20 mb-10 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100" v-for="message in 100" :key="message">
            <div class="w-full self-center">
                <!-- 모금 이름 -->
                <div class="text-lg px-5">
                    <div>
                    <span class="text-xl font-bold">
                        참가자
                    </span>
                    <span>님이</span>
                    </div>
                    <div class="px-1">
                        <span class="text-xl font-bold">"</span>
                        <span class="text-xl font-bold">
                            미션명
                        </span>
                        
                        <span class="text-xl font-bold">"</span>
                    </div>
                    <div>
                        <span>미션에 </span>
                        <span class="font-bold">
                            참여
                        </span>
                        <span>했습니다.</span>
                    </div>
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