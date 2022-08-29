import { useStore, AppState } from './appStore';
import './App.scss';
import { First } from './components/First';

function App() {
	const count = useStore((state: AppState) => state.count);
	const increaseCount = useStore((state: AppState) => state.increaseCount);

	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>count: {count}</p>
			<button onClick={increaseCount}>increase</button>
			<hr />
			<First />
		</div>
	);
}

export default App;
