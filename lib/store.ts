import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StarredState {
  starredCareers: number[];
  toggleStar: (careerId: number) => void;
  isStarred: (careerId: number) => boolean;
}

export const useStarredStore = create<StarredState>()(
  persist(
    (set, get) => ({
      starredCareers: [],
      toggleStar: (careerId) => {
        const { starredCareers } = get();
        const isCurrentlyStarred = starredCareers.includes(careerId);
        
        set({
          starredCareers: isCurrentlyStarred
            ? starredCareers.filter(id => id !== careerId)
            : [...starredCareers, careerId]
        });
      },
      isStarred: (careerId) => {
        return get().starredCareers.includes(careerId);
      }
    }),
    {
      name: 'starred-careers'
    }
  )
);