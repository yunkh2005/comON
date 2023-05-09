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
                        <!-- 닫기 버튼 -->
                        <button @click="$emit('close-modal')" class="fas fa-times float-right text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                        <!-- 안내 멘트 -->
                        <div class="text-center font-extrabold pt-16">
                            <div class="text-lg">모금 추가 요청</div>
                        </div>
                        <div class="grid grid-cols-2 justify-items-center w-1/2 m-auto pt-3">
                            <div class="font-extrabold mr-3">보낸이:</div>
                            <div class="flex">
                                <i class="fa-solid fa-circle-user mx-3"></i>
                                <div class="font-extrabold">이름</div>
                            </div>
                        </div>
                        <!-- 메시지 입력-->
                        <div class="py-10 border-2 border-gray-500 rounded-md w-2/3 h-24 m-auto text-left pt-0 mt-8">
                            메시지 입니다
                        </div>
                        <!-- 버튼 -->
                        <div class="flex place-content-center p-10 cursor-pointer">
                            <button @click="$emit('close-modal')" class="w-1/2 p-4 text-center bg-skyblue  hover:bg-mainblue text-lg font-semibold rounded-lg">
                                확인하기
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


        }
    },

}
</script>
