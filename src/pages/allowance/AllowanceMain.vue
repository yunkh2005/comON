<template lang="">
    <div class="flex flex-col">
        <!-- 월 이동 버튼 -->
        <div class="flex absolute bg-white w-full mt-6 py-1">
            <!-- 이전 월 이동 버튼 -->
            <button class="w-1/3">
                <i class="fa-solid fa-chevron-left px-2 text-xl hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
            </button>
            <!-- 월 안내 -->
            <button class="w-1/3 font-extrabold text-2xl text-center hover:bg-skyblue hover:bg-opacity-20 rounded-full">
                <span>MM</span>
                <span>월</span>
            </button>
            <!-- 이후 월 이동 버튼 -->
            <button class="w-1/3 ">
                <i class="fa-solid fa-chevron-right px-2 text-xl hover:bg-skyblue hover:bg-opacity-20 rounded-full"></i>
            </button>
        </div>

        <!-- 용돈 총 금액-->
        <div class="pt-20 mx-5">
            <div class="flex justify-between px-3 py-1 bg-mainyellow rounded-lg text-2xl text-white">
                <div class="font-bold text-center sm:text-lg">
                    <div>받은</div>
                    <div>용돈</div>
                </div>
                <div class="self-center sm:text-lg">
                    <span>
                        100,000,000,000,000
                    </span>
                    <span class="font-bold">
                        원
                    </span>
                </div>
            </div>
            <div class="flex justify-between mt-1 px-3 py-1 bg-mainyellow rounded-lg text-2xl text-white">
                <div class="font-bold text-center sm:text-lg">
                    <div>준</div>
                    <div>용돈</div>
                </div>
                <div class="self-center text-gray-100  sm:text-lg">
                    <span>
                        100,000,000,000,000
                    </span>
                    <span class="font-bold">
                        원
                    </span>
                </div>
            </div>
        </div>

        <!-- 최근 메시지 -->
        <div class="flex overflow-y-auto">
            <div class="mx-5 my-4 py-1 justify-start text-2xl font-bold sm:text-lg">
                최근 메시지
            </div>
            <!-- 최근 메시지 정보-->
            <div class="absolute w-full mt-14 pb-24">
                <!-- 첫번째 최근 메시지 -->
                <div class="flex justify-between mx-5 my-1 py-4 bg-gray-100 rounded-lg">
                    <!-- 메시지 첨부 사진 -->
                    <div class="w-1/4 self-center pl-3 text-4xl text-center">
                        <i class="fa-solid fa-users-viewfinder"></i>
                    </div>
                    <div class="w-3/5 self-center">
                        <div class="h-full text-xl font-bold sm:text-lg">
                            <span>발신자:</span>
                            <span class="pl-1">가족 이름</span>
                        </div>
                        <div class="w-full sm:text-sm">
                            메시지 내용 한줄 미리보기
                        </div>
                        <div class="text-sm font-bold sm:text-xs">
                            YY-MM-DD AM12:00
                        </div>
                    </div>
                    <router-link to="messageReceoveAllowance" class="w-1/10 self-center pr-3 text-xl">
                        <i class="px-2 py-1 fa-solid fa-chevron-right"></i>
                    </router-link>
                </div>

                <!-- 두번째 최근 메시지 -->
                <div class="flex justify-between mx-5 my-3 py-4 bg-gray-100 rounded-lg">
                    <!-- 메시지 첨부 사진 -->
                    <div class="w-1/4 self-center pl-3 text-4xl text-center">
                        <i class="fa-solid fa-users-viewfinder"></i>
                    </div>
                    <div class="w-3/5 self-center">
                        <div class="h-full text-xl font-bold sm:text-lg">
                            <span>수신자:</span>
                            <span class="pl-1">가족 이름</span>
                        </div>
                        <div class="w-full sm:text-sm">
                            메시지 내용 한줄 미리보기
                        </div>
                        <div class="text-sm font-bold sm:text-xs">
                            YY-MM-DD AM12:00
                        </div>
                    </div>
                    <router-link to="messageSendAllowance" class="w-1/10 self-center pr-3 text-xl">
                        <i class="px-2 py-1 fa-solid fa-chevron-right"></i>
                    </router-link>
                </div>

                <!-- 세번째 최근 메시지 -->
                <div class="flex justify-between mx-5 my-3 py-4 bg-gray-100 rounded-lg">
                    <!-- 메시지 첨부 사진 -->
                    <div class="w-1/4 self-center pl-3 text-4xl text-center">
                        <i class="fa-solid fa-users-viewfinder"></i>
                    </div>
                    <div class="w-3/5 self-center">
                        <div class="h-full text-xl font-bold sm:text-lg">
                            <span>수신자:</span>
                            <span class="pl-1">가족 이름</span>
                        </div>
                        <div class="w-full  sm:text-sm">
                            메시지 내용 한줄 미리보기
                        </div>
                        <div class="text-sm font-bold sm:text-xs">
                            YY-MM-DD AM12:00
                        </div>
                    </div>
                    <div class="w-1/10 self-center pr-3 text-xl">
                        <i class="px-2 py-1 fa-solid fa-chevron-right"></i>
                    </div>
                </div>

                <!-- 네번째 최근 메시지 -->
                <div class="flex justify-between mx-5 my-1 py-4 bg-gray-100 rounded-lg">
                    <!-- 메시지 첨부 사진 -->
                    <div class="w-1/4 self-center pl-3 text-4xl text-center">
                        <i class="fa-solid fa-users-viewfinder"></i>
                    </div>
                    <div class="w-3/5 self-center">
                        <div class="h-full text-xl font-bold sm:text-lg">
                            <span>발신자:</span>
                            <span class="pl-1">가족 이름</span>
                        </div>
                        <div class="w-full sm:text-sm">
                            메시지 내용 한줄 미리보기
                        </div>
                        <div class="text-sm font-bold sm:text-xs">
                            YY-MM-DD AM12:00
                        </div>
                    </div>
                    <div class="w-1/10 self-center pr-3 text-xl">
                        <i class="px-2 py-1 fa-solid fa-chevron-right"></i>
                    </div>
                </div>

                <!-- 다섯번째 최근 메시지 -->
                <div class="flex justify-between mx-5 my-1 py-4 bg-gray-100 rounded-lg">
                    <!-- 메시지 첨부 사진 -->
                    <div class="w-1/4 self-center pl-3 text-4xl text-center">
                        <i class="fa-solid fa-users-viewfinder"></i>
                    </div>
                    <div class="w-3/5 self-center">
                        <div class="h-full text-xl font-bold sm:text-lg">
                            <span>발신자:</span>
                            <span class="pl-1">가족 이름</span>
                        </div>
                        <div class="w-full sm:text-sm">
                            메시지 내용 한줄 미리보기
                        </div>
                        <div class="text-sm font-bold sm:text-xs">
                            YY-MM-DD AM12:00
                        </div>
                    </div>
                    <div class="w-1/10 self-center pr-3 text-xl">
                        <i class="px-2 py-1 fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 하단 우측 버튼 -->
    <div class="fixed bottom-0 right-0 pb-20 justify-items-end">
        <!-- 조르기 전체 기록 버튼 -->
        <div class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-comments bg-skyblue hover:bg-opacity-50 rounded-full text-2xl text-white"></i>
        </div>
        <!-- 조르기 버튼 -->
        <div class="flex flex-row cursor-pointer place-content-end p-3">
            <i class="px-3 py-2 fa-solid fa-comment-dollar bg-mainblue hover:bg-opacity-50 rounded-full text-3xl text-white"></i>
        </div>
    </div>

    <!-- 하단탭 -->
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
<style lang="">
    
</style>