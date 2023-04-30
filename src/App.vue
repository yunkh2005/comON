<template>
	<AllowanceMain></AllowanceMain>
	<PublicButton></PublicButton>
	<ButtomTab></ButtomTab>
</template>
<script>
// import PublicSearch from './components/public/PublicSearch.vue';
import ButtomTab from './components/public/ButtomTab.vue';
import AllowanceMain from './pages/allowance/AllowaceMain.vue'
import PublicButton from './components/public/PublicButton.vue';

export default {
	components: { 
		ButtomTab, 
		AllowanceMain,
		PublicButton,
	}
}
</script>
<style></style>