import { useEffect } from 'react';
import axios from 'axios';
import create from 'zustand';

const url = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export interface AppState {
	search: string;
	count: number;
	increaseCount: () => void;
	techBooks: any[];
	loadTechBooks: (techBooks: any[]) => void;
}

export const useStore = create<AppState>((set) => ({
	search: '',
	count: 3,
	increaseCount: () => set((state: AppState) => ({ count: state.count + 1 })),
	techBooks: [],
	loadTechBooks: (techBooks: any[]) =>
		set((state: AppState) => ({
			techBooks: (state.techBooks = techBooks),
		})),
}));

export const LoadAppData = () => {
	const loadTechBooks = (techBooks: any[]) =>  useStore((state: AppState) => state.techBooks = techBooks);
	const increaseCount = useStore((state: AppState) => state.increaseCount);
	// useEffect(() => {
	// 	(async () => {
	// 		const _techBooks = (await axios.get(url)).data;
	// 		console.log(_techBooks);
	// 		// loadTechBooks(_techBooks);
	// 	})();
	// }, []);

	const handleLoadTechBooks = async () => {
		(async () => {
			const _techBooks = (await axios.get(url)).data;
			console.log(_techBooks);
			loadTechBooks(_techBooks);
			increaseCount();
		})();
	}
	return (
		<>
			<p>nnn</p>
			<button onClick={increaseCount}>increase</button>
			<button onClick={handleLoadTechBooks}>load tech books</button>
		</>
	);
};
