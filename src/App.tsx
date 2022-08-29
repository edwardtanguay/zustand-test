import { useStore, AS } from './appStore';
import './App.scss';
import { First } from './components/First';

function App() {
	const count = useStore((s: AS) => s.count);
	const increaseCount = useStore((s: AS) => (s.increaseCount));

	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>count: {count}</p>
			<button onClick={increaseCount}>increase</button>
			<hr/>
			<First/>
		</div>
	);
}

export default App;
