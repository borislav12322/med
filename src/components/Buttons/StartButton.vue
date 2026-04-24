<script setup lang="ts">
import PlayIcon from '@/assets/icon/PlayIcon.vue';
</script>

<template>
  <button class="start-button">
    <span class="start-button__text">Начать</span>
    <PlayIcon />
  </button>
</template>

<style scoped>
.start-button {
  background-color: var(--bg-color);
  width: 111px;
  padding: 10px 0 13px 26px;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  color: var(--bg-main-text-color);
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  border-radius: 10px;
}
</style>
