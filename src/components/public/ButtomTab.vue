<template>
	<div class="">
		<!-- nav -->
		<div class="flex fixed bottom-0 justify-between w-full px-8 py-1 bg-white border-t border-gray-300 text-gray-500 cursor-pointer text-center">
			<router-link to="/listmain" class="hover:bg-skyblue hover:bg-opacity-20 rounded-full px-4 py-2">
				<i class="fa-solid fa-list-ul text-2xl place-content-center"></i>
				<div class="text-xs font-bold">내역</div>
			</router-link>
			<router-link to="/budgetMain" class="hover:bg-skyblue hover:bg-opacity-20 rounded-full px-4 py-2">
				<i class="fa-solid fa-receipt text-2xl"></i>
				<div class="text-xs font-bold">예산</div>
			</router-link>
			<router-link to="/fundmain" class="hover:bg-skyblue hover:bg-opacity-20 rounded-full px-4 py-2">
				<i class="fa-solid fa-user-group text-2xl"></i>
				<div class="text-xs font-bold">모금</div>
			</router-link>
			<router-link to="/missionmain" class="hover:bg-skyblue hover:bg-opacity-20 rounded-full px-4 py-2">
				<i class="fa-solid fa-sack-dollar text-2xl"></i>
				<div class="text-xs font-bold">미션</div>
			</router-link>
			<router-link to="/allowancemain" class="hover:bg-skyblue hover:bg-opacity-20 rounded-full px-4 py-2">
				<i class="fa-solid fa-comment-dollar text-2xl"></i>
				<div class="text-xs font-bold">용돈</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default { }
</script>

<style></style>
