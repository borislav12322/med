export interface Meditation {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  duration_min: number;
}

export interface MeditationResponseList {
  data: {
    meditations: Meditation[];
    status: 'status' | 'error';
  };
}
