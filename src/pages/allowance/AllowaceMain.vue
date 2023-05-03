<template>
    <div class="h-screen relative">
        <!-- 용돈 총 금액-->
        <div class="">
            <div class="flex justify-center text-2xl font-bold">
                <i class="fa-solid fa-angle-left mt-11 hover:bg-gray-200 cursor-pointer"></i>
                <div class="mt-10 mb-5 mr-2 ml-2">0월 용돈</div>
                <i class="fa-solid fa-angle-right mt-11 hover:bg-gray-200 cursor-pointer"></i>
            </div>
            <div class="divide-y-4 divide-white lg:w-1/2 m-auto text-3xl">
                <div class="flex justify-between p-5 bg-gray-200 rounded-lg">
                    <div>받은 용돈:</div>
                    <div>10,000원</div>
                </div>
                <div class="flex justify-between p-5 bg-gray-200 rounded-lg">
                    <div>준 용돈 :</div>
                    <div>10,000원</div>
                </div>
            </div>
        </div>
        <!-- 메시지 보내기 -->
        <div class="">
            <div class="flex justify-center pt-10 pb-5 text-2xl font-bold">
                메시지 보내기
            </div>
            <div class="flex lg:w-1/2 m-auto lg:text-2xl pt-1 pb-1 bg-gray-200 rounded-lg">
                <div class="basis-1/4 flex m-3 lg:p-3 p-2 bg-white rounded-lg">
                    <i class="fa-solid fa-circle-user pt-1"></i>
                    <div class="ml-3">이름</div>
                </div>
                <div class="basis-1/4 flex m-3 lg:p-3 p-2 bg-white rounded-lg">
                    <i class="fa-solid fa-circle-user pt-1"></i>
                    <div class="ml-3">이름</div>
                </div>
                <div class="basis-1/4 flex m-3 lg:p-3 p-2 bg-white rounded-lg">
                    <i class="fa-solid fa-circle-user pt-1"></i>
                    <div class="ml-3">이름</div>
                </div>
                <div class="basis-1/4 flex m-3 lg:p-3 p-2 bg-white rounded-lg">
                    <i class="fa-solid fa-circle-user pt-1"></i>
                    <div class="ml-3">이름</div>
                </div>
            </div>
        </div>
        <!-- 받은 메시지-->
        <div class="">
            <div class="flex justify-center pt-10 pb-5 text-2xl font-bold">
                받은 메시지
                <i class="fa-solid fa-angle-right mt-1 ml-2 hover:bg-gray-200 cursor-pointer"></i>
            </div>
            <div class="lg:w-1/2 m-auto text-2xl font-bold bg-gray-200 pt-3 pb-3 rounded-lg">
                <div class="flex bg-white m-3 p-3 rounded-lg">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-circle-user ml-6"></i>
                        <div class="ml-3">이름</div>
                    </div>
                    <div class="m-auto ml-8 text-gray-700 text-xl">메시지 입니다.</div>
                    <i class="fa-solid fa-image m-auto mr-3 text-5xl"></i>
                </div>
                <div class="flex bg-white m-3 p-3 rounded-lg">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-circle-user ml-6"></i>
                        <div class="ml-3">이름</div>
                    </div>
                    <div class="m-auto ml-8 text-gray-700 text-xl">메시지 입니다.</div>
                    <i class="fa-solid fa-image m-auto mr-3 text-5xl"></i>
                </div>
                <div class="flex bg-white m-3 p-3 rounded-lg">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-circle-user ml-6"></i>
                        <div class="ml-3">이름</div>
                    </div>
                    <div class="m-auto ml-8 text-gray-700 text-xl">메시지 입니다.</div>
                    <i class="fa-solid fa-image m-auto mr-3 text-5xl"></i>
                </div>
            </div>
        </div>
        <!-- 보낸 메시지 -->
        <div class="pb-40">
            <div class="flex justify-center pt-10 pb-5 text-2xl font-bold">
                보낸 메시지
                <i class="fa-solid fa-angle-right mt-1 ml-2 hover:bg-gray-200 cursor-pointer"></i>
            </div>
            <div class="lg:w-1/2 m-auto text-2xl font-bold bg-gray-200 pt-3 pb-3 rounded-lg">
                <div class="flex bg-white m-3 p-3 rounded-lg">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-circle-user ml-6"></i>
                        <div class="ml-3">이름</div>
                    </div>
                    <div class="m-auto ml-8 text-gray-700 text-xl">메시지 입니다.</div>
                    <i class="fa-solid fa-image m-auto mr-3 text-5xl"></i>
                </div>
                <div class="flex bg-white m-3 p-3 rounded-lg">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-circle-user ml-6"></i>
                        <div class="ml-3">이름</div>
                    </div>
                    <div class="m-auto ml-8 text-gray-700 text-xl">메시지 입니다.</div>
                    <i class="fa-solid fa-image m-auto mr-3 text-5xl"></i>
                </div>
                <div class="flex bg-white m-3 p-3 rounded-lg">
                    <div class="flex flex-col">
                        <i class="fa-solid fa-circle-user ml-6"></i>
                        <div class="ml-3">이름</div>
                    </div>
                    <div class="m-auto ml-8 text-gray-700 text-xl">메시지 입니다.</div>
                    <i class="fa-solid fa-image m-auto mr-3 text-5xl"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>