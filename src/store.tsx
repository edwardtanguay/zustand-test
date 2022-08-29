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
}

export const useStore = create<Store>(
	(set): Store => ({
		message: 'ok',
		setMessage: (message: string) => set((state) => ({ ...state, message }))
	})
);
