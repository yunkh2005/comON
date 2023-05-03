<template>
    <div class="fixed w-screen h-screen overflow-y-auto">
        <div class="flex justify-center px-10 py-60 text-center">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <!-- 뒷 배경 -->
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- 내용 -->
            <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                role="dialog" 
                aria-modal="true" 
                aria-labelledby="modal-headline">
                <div class="border-b border-gray-100 p-2 flex items-center justify-between">
                    <!-- 닫기 버튼 -->
                    <button class="fas fa-times text-primary text-xl p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                </div>

                <!-- 안내 멘트 -->
                <div class="justify-center text-center text-xl font-bold py-10">
                        월별 예산 유형을 추가하세요.
                </div>

                <!-- 중앙 내용 -->
                <div class="grid-rows-2 px-14">
                    <div class="py-1">
                        <span class="font-bold">
                            아이콘
                        </span>
                        <i class="hover:bg-gray-200 fa-solid fa-ellipsis text-lg rounded-full ring-1 ring-black"></i>
                    </div>
                    <div class="py-1">
                        <span class="font-bold">
                            유형명
                        </span>
                        <input type="text"
                                placeholder="입력하세요."
                                class="w-1/2">
                    </div>
                </div>

                <!-- 버튼 -->
                <div class="flex place-content-center p-10 cursor-pointer">
                    <button class="w-1/2 p-4 text-center ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-lg">
                        취소
                    </button>
                    <button class="w-1/2 ml-5 p-4 text-center ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-lg">
                        추가
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>