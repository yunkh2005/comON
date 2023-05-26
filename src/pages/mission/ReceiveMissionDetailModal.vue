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
                        <div>
                            <!-- 안내 멘트 -->
                            <div class="flex justify-center font-extrabold py-10">
                                <div class="mr-3 text-lg">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class=" mr-3 text-lg">보낸이:</div>
                                <div class=" mr-3 text-lg">이름</div>
                            </div>
                            <!-- 메시지 -->
                            <div class="flex flex-col font-extrabold py-2">
                                <i class="fa-solid fa-image text-8xl text-center"></i>
                                <div class="text-center mt-5">
                                    메시지 입니다
                                </div>
                            </div>
                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10">
                                <button @click="$emit('close-modal')"
                                    class="w-1/2 p-4 text-center ring-1 ring-gray-100 bg-gray-100 hover:bg-skyblue hover:text-white text-lg font-semibold rounded-lg">
                                    확인
                                </button>
                                <button @click="$router.push('/detailMission')" class="w-1/2 ml-5 p-4 text-center ring-1 ring-skyblue bg-skyblue hover:opacity-70 text-white text-lg font-semibold rounded-lg">
                                    미션 상세
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