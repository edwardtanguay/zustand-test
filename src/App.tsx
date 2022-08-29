import { useStore, AppState } from './appStore';
import './App.scss';
import { First } from './components/First';
import { LoadAppData } from './appStore';

function App() {
	const count = useStore((state: AppState) => state.count);
	const techBooks = useStore((state: AppState) => state.techBooks);
	const increaseCount = useStore((state: AppState) => state.increaseCount);

	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>count: {count}</p>
			<button onClick={increaseCount}>increase</button>
			<hr />
			<First />
			<hr />
			<LoadAppData />
			<p>{techBooks.length}</p>
		</div>
	);
}

export default App;
