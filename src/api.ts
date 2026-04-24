import axios from 'axios';
import type { MeditationResponseList } from '@/type/Meditation.ts';

const API_URL = 'http://localhost:3000/api';
export const api = {
  meditation: {
    getList: () =>
      axios
        .get<MeditationResponseList>(`${API_URL}/meditations`)
        .then((response) => response.data.data.meditations),
  },
};
