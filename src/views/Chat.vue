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
						<div>
							<ChatMessage date="10 hours ago" message="hello world" />
							<ChatMessage date="10 hours ago"
								message="Reprehenderit ut voluptas sapiente ratione nostrum est." user />
							<ChatMessage date="10 hours ago" message="hello world" />
							<ChatMessage date="10 hours ago"
								message="Reprehenderit ut voluptas sapiente ratione nostrum est." user />
							<ChatMessage date="10 hours ago" message="hello world" />
							<ChatMessage date="10 hours ago"
								message="Reprehenderit ut voluptas sapiente ratione nostrum est." user />
							<ChatMessage date="10 hours ago" message="hello world" />
							<ChatMessage date="10 hours ago"
								message="Reprehenderit ut voluptas sapiente ratione nostrum est." user />
							<ChatMessage date="10 hours ago" message="hello world" />
							<ChatMessage date="10 hours ago"
								message="Reprehenderit ut voluptas sapiente ratione nostrum est." user />
						</div>
					</NScrollbar>
				</div>
			</main>
			<footer class="p-4">
				<div class="flex items-center justify-between space-x-2">
					<NInput placeholder="Type a message" />
					<NButton type="primary">
						<SvgIcon/>
					</NButton>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { NButton, NInput, NScrollbar } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import ChatMessage from './ChatMessage.vue';
</script>

<style scoped></style>
