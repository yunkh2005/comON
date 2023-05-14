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
                        <!-- 닫기 버튼 -->
                        <button @click="$emit('close-modal')" class="fas fa-times float-right text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                        <div v-if="!enterYn">
                            <!-- 안내 멘트 -->
                            <div>
                                <div class="text-center text-lg font-extrabold pt-16">
                                보상을 설정해주세요
                                </div>
                                <div class="flex justify-center font-extrabold pt-10">
                                    <div class="mr-3 text-lg">대상:</div>
                                    <select class="w-1/3 rounded-md ring-1 ring-inset ring-gray-700 focus:ring-mainblue text-sm">
                                        <option>이름</option>
                                        <option>이름</option>
                                        <option>이름</option>
                                    </select>
                                </div>
                                <div class="flex justify-center pt-5">
                                    <div class="mr-3 text-lg font-extrabold">보상:</div>
                                    <div class="w-1/3 text-lg">10,000원</div>
                                </div>
                            </div>
                            <!-- 버튼 -->
                            <div class="flex place-content-center p-10 cursor-pointer">
                                <button @click="$emit('close-modal')" class="w-1/2 p-4 text-center bg-gray-100 hover:bg-skyblue text-lg font-semibold rounded-lg">
                                    취소
                                </button>
                                <button @click="enterYn = true" class="w-1/2 ml-5 p-4 text-center bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                                    보내기
                                </button>
                            </div>
                        </div>
                        <div v-else>
                            <div class="text-center text-lg font-extrabold pt-16">
                                보상을 지급했습니다.
                            </div>
                            <div class="flex place-content-center p-10 cursor-pointer">
                                <button @click="$emit('close-modal')" class="w-1/2 m-auto p-4 bg-mainyellow hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
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
        }
    },
    methods: {

    }
}
</script>

<style></style>