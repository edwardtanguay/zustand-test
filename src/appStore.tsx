import create from 'zustand';

export interface AS {
	search: string;
	count: number;
	increaseCount: () => void;
}

export const useStore = create<AS>((set) => ({
	search: '',
	count: 3,
	increaseCount: () => set((state: AS) => ({ count: state.count + 1 }))
}));

