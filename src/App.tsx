import { useStore } from './store';
import './App.scss';

function App() {
	const store = useStore((state) => state);
	
	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>Message: {store.message}</p>
			<button onClick={() => store.setMessage('new message')}>change message</button>
			<button onClick={() => store.setMessage('old message')}>change message</button>
		</div>
	);
}

export default App;
