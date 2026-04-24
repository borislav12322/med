<script setup lang="ts">
import { useMeditationStore } from '@/store/Meditation.store.ts';
import MeditationItem from '@/components/Meditation/MeditationItem.vue';
import { onMounted } from 'vue';

const store = useMeditationStore();

onMounted(() => {
  store.getMeditationList();
});
</script>

<template>
  <div class="meditation-list">
    <div class="meditation-list__wrapper">
      <MeditationItem
        v-for="meditationItem in store.meditationList"
        :key="meditationItem.id"
        :id="meditationItem.id"
        :title="meditationItem.title"
        :description="meditationItem.description"
        :duration_min="meditationItem.duration_min"
      />
    </div>
  </div>
</template>

<style scoped>
.meditation-list__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 700px;
  gap: 22px;
}
</style>
