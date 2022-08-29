import create from 'zustand';

// export interface TechBook {
// 	idCode: string;
// 	title: string;
// 	description: string;
// 	language: string;
// }




interface Store {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	setColors: (colors: string[]) => void;
}

export const useStore = create<Store>(
	(set): Store => ({
		message: '',
		setMessage: (message: string) => set((state) => ({ ...state, message })),
		colors: ['blue', 'white'],
		setColors: (colors: string[]) => set((state) => ({...state, colors})) 
	})
);
