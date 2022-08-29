import './App.scss';
import create from 'zustand';
import { First } from './components/First';

interface AppState {
	search: string;
	count: number;
	increaseCount: () => void;
}

const useStore = create<AppState>((set) => ({
	search: '',
	count: 3,
	increaseCount: () => set((state:AppState) => ({count: state.count + 1}))
}))

function App() {
	const count = useStore((state: AppState) => state.count);

	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>count: {count}</p>
			<button onClick={useStore((state: AppState) => (state.increaseCount))}>increase</button>
			<hr/>
			<First/>
		</div>
	);
}

export default App;
