<template>
  <NConfigProvider class="h-full" :theme-overrides="themeOverrides">
    <div class="flex h-full">
      <div class="w-[700px] h-[600px] m-auto">
        <router-view />
      </div>
    </div>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3eaf7c'
  },
  Button: {
    color: '#FF0000'
  }
}
</script>

<style lang="scss"></style>
