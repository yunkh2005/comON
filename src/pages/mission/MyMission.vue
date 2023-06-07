<template>
    <div>
    <!-- 상단 -->
    <div class="flex p-2 items-center">
        <!-- 닫기 버튼 -->
        <button @click="$router.push('/missionMain')"
            class="fa-solid fa-arrow-left text-primary text-xl p-2 h-12 w-12 hover:bg-skyblue hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
        <div class="flex-col pl-4 font-bold text-2xl">
            내 미션
        </div>
    </div>

    <!-- 상단 중앙 진행, 완료 선택 버튼 -->
    <div class="flex left-0 top-0 bg-white w-full px-24 py-3">
        <button class="text-center w-1/2 h-9 bg-skyblue text-2xl text-white font-semibold rounded-l-full">
            생성
        </button>
        <button @click="$router.push('myCompletedMission')"
            class="text-center w-1/2 h-9 bg-gray-100 hover:bg-skyblue hover:text-white text-2xl font-semibold rounded-r-full">
            참여
        </button>
    </div>

    <!-- 중앙 내용 -->
    <div class="inset-0 mx-5 pt-5 overflow-y-auto">
        <div class="flex justify-between my-1 py-4 bg-gray-100 rounded-lg" v-for="message in 100" :key="message">
            <!-- 사용자 프로필 사진 -->
            <div class="w-1/5 self-center pl-3 text-center">
                <i class="fa-solid fa-circle-user text-4xl"></i>
                <div class="font-bold">
                    생성자
                </div>
            </div>
            <div class="w-4/5 ml-3">
                <div class="flex">
                    <!-- 미션 이름 -->
                    <div class="text-2xl font-bold mr-5">
                        미션명
                    </div>
                    <div class="pt-1 font-bold">
                        <span class="text-lg">
                            보상:
                        </span>
                        <span class="text-xl">
                            100,000
                        </span>
                        <span class="text-lg">
                            원
                        </span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                        <!-- 보상 금액 -->
                        <div class="pt-1 font-bold text-gray-500">
                            <span class="text-lg">
                                설명입니다.
                            </span>
                        </div>
                        <!-- 기간 -->
                        <div class="text-lg text-gray-500">
                            <span class="font-bold">
                                YY.MM.DD
                            </span>
                            <span>
                                ~
                            </span>
                            <span class="font-bold">
                                YY.MM.DD
                            </span>
                        </div>
                    </div>
                    <router-link to="detailMission">
                        <button class="pr-5 text-xl">
                            <i class="py-1 fa-solid fa-chevron-right hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return{
        }
    }
}
</script>
<style></style>