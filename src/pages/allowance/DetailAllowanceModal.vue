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
                            <!-- 닫기 버튼 -->
                            <button @click="$emit('close-modal')"
                                class="fas fa-times float-right text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                            <!-- 안내 멘트 -->
                            <div class="flex justify-center font-extrabold py-10">
                                <div class="mr-3 text-lg">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class=" mr-3 text-lg">보낸이:</div>
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
                            <div>
                                <div class="flex justify-center text-2xl mb-9 ">

                                    <textarea v-model="allowanceMessage" rows="10"
                                        class="w-5/6 rounded ring-1 ring-gray-700 text-sm resize-none"
                                        placeholder=" 메시지를 입력하세요">
                                    </textarea>

                                </div>


                            </div>

                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10">
                                <button @click="$emit('close-modal')"
                                    class="w-1/2 p-4 text-center ring-1 ring-gray-100 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                                    거절하기
                                </button>
                                <button @click="allowanceMessage ? enterYn = true : enterYn = false"
                                    class="w-1/2 ml-5 p-4 text-center ring-1 ring-skyblue bg-skyblue hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                                    용돈주기
                                </button>
                            </div>
                        </div>

                        <div v-else class="flex flex-col">
                            <button
                                class="fas fa-times text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                            <div class="text-center text-lg font-extrabold py-10">
                                용돈을 주었습니다.
                            </div>
                            <button @click="$emit('close-modal')"
                                class="w-1/2 m-auto mb-4 p-4 bg-skyblue hover:bg-mainblue text-lg font-semibold rounded-lg">
                                확인
                            </button>
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
            enterYn: false,
            fundMessage: "",
        }
    },

}
</script>

<style></style>