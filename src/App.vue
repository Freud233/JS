<template>
  <NConfigProvider :theme="darkTheme">
    <router-view />
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NConfigProvider } from 'naive-ui'
import { darkTheme } from 'naive-ui'
</script>

<style lang="scss"></style>
