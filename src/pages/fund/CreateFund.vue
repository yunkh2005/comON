<template>
    <!-- 상단 -->
    <div class="items-center bg-mainblue">
        <div class="flex p-2 items-center">
            <!-- 닫기 버튼 -->
            <button @click="$router.go(-1)" class="fa-solid fa-arrow-left text-white text-xl p-2 h-12 w-12 hover:bg-white hover:bg-opacity-20 rounded-full"></button>
            <!-- 화면명 -->
            <div class="pl-4 font-bold text-2xl text-white">
                모금 생성
            </div>
        </div>
        <!-- 사진 입력 -->
        <div class="flex items-center w-full h-56 bg-mainblue">
            <i class="fa-solid fa-users-viewfinder m-auto text-5xl text-white"></i>
        </div>
    </div>
    <!-- 상세 입력 -->
    <div class="divide-y-2 divide-gray-300 lg:w-1/2 lg:m-auto lg:mt-10 m-10">
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">모금명</div>
            <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none"  placeholder="입력하세요"/>
        </div>
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue fontㄴ-bold text-xl w-1/3">목표금액</div>
            <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none"   placeholder="입력하세요"/>
        </div>
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">설명</div>
            <input type="text" class="rounded w-1/2 focus:ring-2 focus:border-primary focus:outline-none"  placeholder="입력하세요"/>
        </div>
        <div class="flex pt-5 mb-3">
            <div class="text-mainblue font-bold text-xl w-1/3">기간</div>
            <input v-model="startDate" type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400" :min="todayDate"/>
            <div class="px-3">~</div>
            <input type="date" class="rounded focus:ring-2 focus:border-primary focus:outline-none text-gray-400" :min="startDate"/>
        </div>
    </div>
    <!-- 하단 버튼 -->
    <div class="absolute inset-x-0 bottom-0 px-6 py-3"> 
        <button @click="showCreateFundModal = true" class="w-full py-1 ring-1 ring-gray-100 bg-skyblue hover:bg-opacity-70 text-white text-lg font-semibold rounded-lg">
            생성
        </button>
    </div>
    <CreateFundModal v-if="showCreateFundModal" @close-modal="showCreateFundModal = false"></CreateFundModal>
</template>

<script>
import CreateFundModal from './CreateFundModal.vue';
// import {ref} from 'vue'

// import { Fund_Collection } from '../firebase'
export default {
	components: { 
        CreateFundModal,
	},
    data(){
        return{
            showCreateFundModal: false,
            todayDate: new Date().toISOString().split("T")[0],
            startDate: new Date().toISOString().split("T")[0],
        }
    },
    methods: {
    
    },
// setup(){
//         const fundTitle = ref('')
//         const goalMoney = ref('')
//         const fundExplain = ref('')
        
        
//         const onAddFund = async () => {
//             try{
//                 console.log("doc.fundtitle.value = ", doc.fundTitle.value)
//                 console.log("doc.goalmoney.value = ", doc.goalmoney.value)
//                 console.log("doc.fundExplain.value = ", doc.fundExplain.value)
//            const doc = Fund_Collection.doc()
//            await doc.set({
//             id: doc.id,
//             fundTitle: doc.fundtitle.value,
//             goalmoney:  doc.goalmoney.value,
//             fundExplain: doc.fundExplain.value
//             })
//             fundtitle.value = '',
//             goalmoney.value  = '',
//             undExplain.value  = ''
//             }catch(e) {
//                 console.log("on add funderror on CreateFund", e)
//             }

//         }

//         return {fundTitle, goalMoney, fundExplain, onAddFund}
//     }
}
</script>

<style></style>