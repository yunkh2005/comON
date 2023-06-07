<template>
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 px-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" 
                        aria-modal="true" 
                        aria-labelledby="modal-headline">
                        <div v-if="!isEmpty">
                            <div v-if="!enterYn">
                                <!-- 안내 멘트 -->
                                <div class="text-center text-lg font-extrabold pt-16">
                                    미션을 생성하시겠습니까?
                                </div>
                                <div class="pt-10 divide-y-2 divide-gray-300">
                                    <div class="flex justify-between w-2/3 m-auto pt-7">
                                        <div class="font-bold md:text-lg w-1/3 ">미션명</div>
                                        <div>미션명입니다.</div>
                                    </div>
                                    <div class="flex justify-between w-2/3 m-auto pt-7">
                                        <div class="font-bold md:text-lg w-1/3 ">보상</div>
                                        <div>100,000,000 원</div>
                                    </div>
                                    <div class="flex justify-between w-2/3 m-auto pt-7">
                                        <div class="font-bold md:text-lg w-1/3 ">설명</div>
                                        <div>설명입니다.</div>
                                    </div>
                                    <div class="flex justify-between w-2/3 m-auto pt-7">
                                        <div class="font-bold md:text-lg w-1/3 ">기간</div>
                                        <div class="text-xs md:text-base">2023/03/01 ~ 2023/03/31</div>
                                    </div>
                                    <div class="flex justify-between w-2/3 m-auto"></div>
                                </div>
                                <!-- 버튼 -->
                                <div class="flex place-content-center p-10 cursor-pointer">
                                    <button @click="$emit('close-modal')" class="w-1/2 p-4 text-center bg-gray-100 hover:bg-skyblue text-lg font-semibold rounded-lg">
                                        취소
                                    </button>
                                    <button @click="enterYn = true" class="w-1/2 ml-5 p-4 text-center bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                                        생성
                                    </button>
                                </div>
                            </div>
                            <div v-else>
                                <div class="text-center text-lg font-extrabold pt-16">
                                    미션을 생성했습니다.
                                </div>
                                <div class="flex place-content-center p-10 cursor-pointer">
                                    <button @click="$router.push('/missionMain')" class="w-1/2 m-auto p-4 bg-mainyellow hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                                    확인
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <!-- 안내 멘트 -->
                            <div class="text-center text-lg font-extrabold pt-16">
                                필수항목을 입력해주세요
                            </div>
                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10 cursor-pointer">
                                <button @click="$emit('close-modal')" class="w-1/2 m-auto p-4 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            enterYn: false,
            isEmpty: false,
        }
    },
    methods: {

    }
}
</script>

<style></style>