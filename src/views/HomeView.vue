<template>
  <div class="home">
    <a-space>
      <a-input :style="{ width: '320px', border: '1px solid rgb(58 219 177)'}" v-model="data" placeholder="输入你的内容"
        allow-clear />
    </a-space>
    <a-button type="primary" status="warning">Primary</a-button>
    <h1>{{ data }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: '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',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
console.log(openai);
const data = ref('');
</script>

<style scoped lang="scss">
</style>
