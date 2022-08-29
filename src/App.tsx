import { useStore } from './store';
import './App.scss';

function App() {
	const store = useStore((state) => state);
	
	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>Message: {store.message}</p>
		</div>
	);
}

export default App;
