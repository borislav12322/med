<script setup lang="ts">
import type { Meditation } from '@/type/Meditation.ts';
import StartButton from '@/components/Buttons/StartButton.vue';

const { title, description, duration_min } =
  defineProps<Omit<Meditation, 'created_at' | 'updated_at'>>();
</script>

<template>
  <div class="meditation-item">
    <div class="meditation-item__wrapper">
      <h2 class="meditation-item__title">
        {{ title }}
      </h2>

      <p class="meditation-item__description">
        {{ description }}
      </p>

      <div class="meditation-item__content">
        <StartButton />
        <span class="meditation-item__content-text"> {{ duration_min }} мин </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditation-item__wrapper {
  padding: 22px 33px 23px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: var(--bg-card);
}

.meditation-item__title {
  font-weight: 500;
  font-size: 25px;
  color: var(--bg-secondary-text-color);
}

.meditation-item__description {
  font-weight: 500;
  font-size: 15px;
  color: var(--bg-secondary-text-color);
}

.meditation-item__content {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
}

.meditation-item__content-text {
  color: var(--bg-color);
  font-weight: 500;
  font-size: 15px;
}
</style>
