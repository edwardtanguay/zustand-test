import create from 'zustand';

export interface TechBook {
	idCode: string;
	title: string;
	description: string;
	language: string;
}

const techBookModel = {};

interface Store {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	setColors: (colors: string[]) => void;
	addColor: (color: string) => void;
	deleteColor: () => void;
	deleteVowelsAndColorRed: () => void;
	currentUserStatus: {
		isOnline: boolean;
		emailIsConfirmed: boolean;
	};
	toggleCurrentUserStatusOnline: () => void;
	toggleCurrentUserStatusEmail: () => void;
	techBooks: TechBook[];
	loadTechBooks: () => void;
}

export const useStore = create<Store>(
	(set): Store => ({
		// string
		message: 'test',
		setMessage: (message: string) =>
			set((state) => ({ ...state, message })),
		// array of strings
		colors: ['blue', 'white', 'red'],
		setColors: (colors: string[]) => set((state) => ({ ...state, colors })),
		addColor: (color: string) =>
			set((state) => ({ ...state, colors: [...state.colors, color] })),
		deleteColor: () =>
			set((state) => ({ ...state, colors: state.colors.slice(0, -1) })),
		// object
		currentUserStatus: {
			isOnline: false,
			emailIsConfirmed: true,
		},
		toggleCurrentUserStatusOnline: () =>
			set((state) => {
				const _state = { ...state };
				_state.currentUserStatus.isOnline =
					!_state.currentUserStatus.isOnline;
				return _state;
			}),
		toggleCurrentUserStatusEmail: () =>
			set((state) => {
				const _state = { ...state };
				_state.currentUserStatus.emailIsConfirmed =
					!_state.currentUserStatus.emailIsConfirmed;
				return _state;
			}),
		// change multiple values in state
		deleteVowelsAndColorRed: () =>
			set((state) => {
				const _state = { ...state };
				_state.message = _state.message.replace(/[aeiou]/gi, '');
				_state.colors = _state.colors.filter((m) => m !== 'red');
				return _state;
			}),
		techBooks: [],
		loadTechBooks: () =>
			set((state) => {
				const _state = { ...state };
				_state.techBooks = [
					{
						idCode: 'nnn',
						title: 'Book 1',
						description: 'nnn',
						language: 'nnn',
					},
					{
						idCode: 'nnn',
						title: 'Book 2',
						description: 'nnn',
						language: 'nnn',
					},
				];
				return _state;
			}),
	})
);
