import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Meditation } from '@/type/Meditation.ts';
import { api } from '@/api.ts';

export const useMeditationStore = defineStore('meditation', () => {
  const meditationList = ref<Meditation[]>([]);

  const getMeditationList = async () => {
    try {
      meditationList.value = await api.meditation.getList();
    } catch {
      throw new Error('Request error');
    }
  };

  return { meditationList, getMeditationList };
});
