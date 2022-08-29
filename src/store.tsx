import create from 'zustand';

export interface TechBook {
	idCode: string;
	title: string;
	description: string;
	language: string;
}

const techBookModel = {

}


interface Store {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	setColors: (colors: string[]) => void;
	addColor: (color: string) => void;
	deleteColor: () => void;
}

export const useStore = create<Store>(
	(set): Store => ({
		// string
		message: 'test',
		setMessage: (message: string) => set((state) => ({ ...state, message })),
		// array of strings
		colors: ['blue', 'white'],
		setColors: (colors: string[]) => set((state) => ({ ...state, colors })),
		addColor: (color: string) => set((state) => ({ ...state, colors: [...state.colors, color] }) ),
		deleteColor: () => set((state) => ({ ...state, colors: state.colors.slice(0,-1) }) ) 
	})
);
