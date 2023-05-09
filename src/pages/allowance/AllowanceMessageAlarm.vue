<template>
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0">
            <div class="flex items-end justify-center text-center sm:p-3">
                <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div class="inline-block overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full bg-white rounded-lg text-left"
                        role="dialog" 
                        aria-modal="true" 
                        aria-labelledby="modal-headline">
                        <!-- 메시지 -->
                        <div class="font-extrabold pt-5">
                            <div class="text-lg w-5/6 m-auto">00님의 용돈 조르기</div>
                        </div>
                        <div class="flex w-5/6 m-auto p-5 bg-gray-200 my-5">
                            <div class="flex flex-col mr-5">
                                <i class="fa-solid fa-circle-user text-center"></i>
                                <div class="font-extrabold">이름</div>
                            </div>
                            <div>메시지 입니다.</div>
                        </div>
                        <div class="border-y-2 my-3 w-1/2 m-auto rounded-md"></div>    
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
