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
                            <div class="justify-center text-center text-lg font-extrabold py-10">
                                 내역을 삭제하시겠습니까?
                            
                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10 cursor-pointer">
                                <button @click="$emit('close-modal')" class="w-1/2 p-4 text-center ring-1 ring-gray-100 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                                    취소
                                </button>
                                <button @click="fundMessage ? enterYn = true : enterYn = false" class="w-1/2 ml-5 p-4 text-center ring-1 ring-skyblue bg-skyblue hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                                    전송
                                </button>
                            </div>
                            </div>
                        </div>
                        <div v-else class="flex flex-col">
                            <button class="fas fa-times text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                            <div class="text-center text-lg font-extrabold py-10">
                                내역을 삭제하였습니다.
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