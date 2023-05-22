<script setup>
import { useAppStore } from '@/store/app.js';

const app = useAppStore();
</script>

<template>
  <div>{{ app.count }}</div>
</template>

<style scoped></style>
