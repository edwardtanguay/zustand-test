import create from 'zustand';

export interface AppState {
	search: string;
	count: number;
	increaseCount: () => void;
}

export const useStore = create<AppState>((set) => ({
	search: '',
	count: 3,
	increaseCount: () => set((state: AppState) => ({ count: state.count + 1 }))
}));

