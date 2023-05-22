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
                        <!-- 안내 멘트 -->
                        <div class="text-center font-extrabold pt-16">
                            <div class="text-lg">어떤 내역을 추가하시겠습니까?</div>
                        </div>
                        <!-- 버튼 -->
                        <div class="flex place-content-center p-10 cursor-pointer">
                            <router-link to="/addIncome"  class="w-1/2 p-4 text-center bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                                수입
                            </router-link>
                            <router-link to="/addOutcome" class="w-1/2 ml-5 p-4 text-center bg-mainyellow hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
                                지출
                            </router-link>
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
