<template>
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" 
                        aria-modal="true" 
                        aria-labelledby="modal-headline">
                        <div v-if="!enterYn">
                            <!-- 닫기 버튼 -->
                            <button @click="$emit('close-modal')" class="fas fa-times float-right text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                            <!-- 안내 멘트 -->
                            <div class="flex justify-center font-extrabold py-10">
                                <div class="mr-3 text-lg">대상:</div>
                                <select class="w-1/3 rounded-md ring-1 ring-inset ring-gray-700 focus:ring-mainblue text-sm">
                                    <option>이름</option>
                                    <option>이름</option>
                                    <option>이름</option>
                                </select>
                            </div>
                            <!-- 메시지 입력-->
                            <div class="flex justify-center text-2xl mb-9">
                                <textarea v-model="fundMessage" rows="10" class="w-5/6 rounded ring-1 ring-gray-700 text-sm" placeholder=" 메시지를 입력하세요"></textarea>
                            </div>
                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10 cursor-pointer">
                                <button @click="$emit('close-modal')" class="w-1/2 p-4 text-center bg-gray-300  hover:bg-mainblue text-lg font-semibold rounded-lg">
                                    취소
                                </button>
                                <button @click="fundMessage ? enterYn = true : enterYn = false" class="w-1/2 ml-5 p-4 text-center bg-skyblue  hover:bg-mainblue text-lg font-semibold rounded-lg">
                                    전송
                                </button>
                            </div>
                        </div>
                        <div v-else class="flex flex-col">
                            <button class="fas fa-times text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                            <div class="text-center text-lg font-extrabold py-10">
                                메시지를 전송했습니다.
                            </div>
                            <button @click="$emit('close-modal')" class="w-1/2 m-auto mb-4 p-4 bg-skyblue hover:bg-mainblue text-lg font-semibold rounded-lg">
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