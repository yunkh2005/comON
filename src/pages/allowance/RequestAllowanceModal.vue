<template>
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto px-5">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" 
                        aria-modal="true" 
                        aria-labelledby="modal-headline">
                        <div v-if="!enterYn">
                            <!-- 안내 멘트 -->
                            <div class="flex justify-center font-extrabold py-10 mr-3 text-lg">
                                <div class="mr-3 text-lg">수신자:</div>
                                <div>이름</div>
                            </div>

                            <!-- 메시지 입력-->
                            <div class="mx-5">
                                <div class="flex-row items-center text-2xl mb-9 ring-1 ring-gray-300">
                                    <textarea v-model="allowanceMessage" rows="10"
                                        class="w-full rounded ring-gray-700 text-sm resize-none"
                                        placeholder=" 메시지를 입력하세요">
                                    </textarea>
                                    <div class="grid grid-cols-2 border-t border-gray-300">
                                        <button
                                            class="ml-2 mx-1 p-2 text-center text-gray-400 font-semibold hover:bg-gray-100">
                                        <i class="fa-solid fa-camera"></i>
                                        </button>
                                        <button
                                            class="mr-2 mx-1 p-2 text-center text-gray-400 font-semibold hover:bg-gray-100">
                                            <i class="fa-solid fa-folder-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10">
                                <button @click="$emit('close-modal')"
                                    class="w-1/2 ml-5 p-4 text-center ring-1 ring-gray-100 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                                    취소
                                </button>
                                <button @click="allowanceMessage ? enterYn = true : enterYn = false"
                                    class="w-1/2 ml-5 p-4 text-center ring-1 ring-skyblue bg-skyblue hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                                    전송
                                </button>
                            </div>
                        </div>
                        <div v-else class="flex flex-col">
                            <div class="text-center text-lg font-extrabold py-7">
                                메시지가 전송되었습니다.
                            </div>
                            <i class="fa-solid fa-hands-clapping text-7xl text-center mb-7"></i>
                            <button @click="$emit('close-modal')" class="w-1/2 m-auto mb-10 p-4 bg-mainyellow hover:opacity-70 text-white text-lg font-semibold rounded-lg">
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
    data(){
        return{
            enterYn: false,
            fundMessage: "",
        }
    },

}
</script>

<style></style>