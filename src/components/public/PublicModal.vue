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
                <div class="justify-center text-center text-lg font-extrabold py-10">
                        어떤 팝업을 정의하십니까?
                </div>

                <!-- 버튼 -->
                <div class="flex place-content-center p-10 cursor-pointer">
                    <button class="w-1/2 p-4 text-center ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-lg">
                        선택1
                    </button>
                    <button class="w-1/2 ml-5 p-4 text-center ring-1 ring-gray-300 hover:bg-gray-300 text-lg font-semibold rounded-lg">
                        선택2
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