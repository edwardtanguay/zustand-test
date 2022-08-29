import { useStore, AppState } from './appStore';
import './App.scss';
import { First } from './components/First';

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
