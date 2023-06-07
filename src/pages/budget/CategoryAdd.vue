<template>
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 px-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" 
                        aria-modal="true" 
                        aria-labelledby="modal-headline">
                        <!-- 내용 -->
                    <div @click.stop class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" 
                        aria-modal="true" 
                        aria-labelledby="modal-headline">

                            <!-- 안내 멘트 -->
                            <div class="justify-center text-center text-xl font-bold py-10">
                                    월별 예산 유형을 추가하세요.
                            </div>

                            <!-- 중앙 내용 -->
                            <div class="grid-rows-2 px-14">
                                <div class="py-1">
                                    <span class="font-bold">
                                        유형명
                                    </span>
                                    <input type="text" placeholder="입력하세요." class="w-1/2">
                                </div>
                            </div>

                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10 cursor-pointer">
                                <button @click="$emit('close-modal')" class="w-1/2 p-4 text-center bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                                    취소
                                </button>
                                <button @click="$emit('close-modal')" class="w-1/2 ml-5 p-4 text-center bg-skyblue hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                                    추가
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
        }
    }
</script>

<style>
    
</style>