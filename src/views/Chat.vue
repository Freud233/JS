<template>
	<div class="h-full p-4">
		<div class="flex flex-col h-full overflow-hidden border rounded-md shadow-md">
			<header class="flex items-center justify-between p-4">
				<div>会话</div>
				<div>&nbsp;</div>
			</header>
			<main class="flex-1 overflow-hidden border-y">
				<div class="h-full">
					<NScrollbar class="h-full p-4">
						{{ messagesData }}
						<ChatMessage v-for="(item, index) in messagesData" :key="index" :messageData="item" />
					</NScrollbar>
				</div>
			</main>
			<footer class="p-4">
				<div class="flex items-center justify-between space-x-2">
					<NInput placeholder="Type a message" @keyup="handleEnter" />
					<NButton type="primary" class="bg-pink-400" @click="handleSumbit">
						<SvgIcon icon="fa:send" />
					</NButton>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onBeforeMount, watch } from 'vue';
import { NButton, NInput, NScrollbar } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import ChatMessage from './ChatMessage.vue';
import { getChatMessage } from '../request/chatmessage.js'
let messagesData = reactive([]);
// TODO 从后端获取数据页面没有渲染
onBeforeMount(async () => {
	let {data} = await getChatMessage();
	messagesData = data.data
})
let handleSumbit = async () => {
	console.log('handleSumbit');

};
let handleEnter = (e: KeyboardEvent) => {
	if (e.key === 'Enter') {
		handleSumbit();
	}
};

</script>

<style scoped></style>
