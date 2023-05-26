<template>
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <!-- 뒷 배경 -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <!-- 모달 화면 흰 배경 -->
        <div class="fixed inset-0 z-10 px-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div @click.stop
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div v-if="!enterYn">
                            <!-- 안내 멘트 -->
                            <div class="flex justify-center font-extrabold py-10">
                                <div class="mr-3 text-lg">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class=" mr-3 text-lg">수신자:</div>
                                <div class=" mr-3 text-lg">이름</div>
                            </div>

                            <!-- 보낸이가 보낸 사진 -->
                            <div class="flex justify-center font-extrabold py-2">
                                <i class="fa-solid fa-image text-8xl"></i>
                                <!-- 요청받은 용돈 -->
                            </div>
                            <div class="flex pb-4 justify-center font-extrabold">
                                <div class=" mr-3 tet-lg">요청한 용돈:</div>

                                <div class=" mr-3 tet-lg">0원</div>
                            </div>
                            <!-- 메시지 입력-->
                            <div class="text-center">
                                메시지입니다
                            </div>

                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10">
                                <button @click="$emit('close-modal')"
                                    class="w-1/2 p-4 text-center ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
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
    data() {
        return {
        }
    },

}
</script>

<style></style>