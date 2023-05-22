<script setup>
import { useRouter } from 'vue-router';

import { useAppStore } from '@/store/app.js';

const router = useRouter();
function goAbout() {
  router.push('/about');
}

const app = useAppStore();
</script>

<template>
  <div>
    <van-button>{{ app.count }}</van-button>
    <van-button @click="app.increment()">increment</van-button>
    <van-button @click="goAbout">去关于页面</van-button>
    <div class="name"><span class="red">我是</span></div>
  </div>
</template>

<style scoped lang="scss">
.name {
  .red {
    color: red;
    font-size: 16px;
  }
}
</style>
