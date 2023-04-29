<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex justify-center min-h-screen pt-52 px-5 pb-52 text-center">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- 내용 -->
            <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
                role="dialog" 
                aria-modal="true" 
                aria-labelledby="modal-headline">
                <div class="border-b border-gray-100 p-2 flex items-center justify-between">
                    <!-- 닫기 버튼 -->
                    <button class="fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-gray-100 rounded-full"></button>
                </div>

                <!-- 안내 멘트 -->
                <div class="justify-center text-center text-lg font-extrabold py-8">
                        어떤 팝업을 정의하십니까?
                </div>

                <!-- 버튼 -->
                <div class="flex place-content-center px-5 py-10 cursor-pointer">
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